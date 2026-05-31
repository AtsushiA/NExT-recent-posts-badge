
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Block props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to set block attributes.
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { taxonomy, termId, days, badgeText } = attributes;
	const [ hasRecentPosts, setHasRecentPosts ] = useState( false );

	const taxonomies = useSelect( ( select ) => {
		const { getTaxonomies } = select( 'core' );
		return getTaxonomies( { per_page: -1 } ) || [];
	}, [] );

	const terms = useSelect(
		( select ) => {
			if ( ! taxonomy ) {
				return [];
			}
			const { getEntityRecords } = select( 'core' );
			return (
				getEntityRecords( 'taxonomy', taxonomy, { per_page: -1 } ) || []
			);
		},
		[ taxonomy ]
	);

	useEffect( () => {
		if ( ! taxonomy || ! termId || termId === 0 ) {
			setHasRecentPosts( false );
			return;
		}

		const checkRecentPosts = async () => {
			try {
				const dateThreshold = new Date();
				dateThreshold.setDate( dateThreshold.getDate() - days );

				const response = await fetch(
					`/wp-json/wp/v2/posts?${ taxonomy }=${ termId }&after=${ dateThreshold.toISOString() }&per_page=1`
				);
				const posts = await response.json();
				setHasRecentPosts( posts.length > 0 );
			} catch ( error ) {
				setHasRecentPosts( false );
			}
		};

		checkRecentPosts();
	}, [ taxonomy, termId, days ] );

	const taxonomyOptions = [
		{ label: __( 'Select a taxonomy', 'next-recent-posts-badge' ), value: '' },
		...( taxonomies || [] )
			.filter( ( tax ) => tax.visibility?.publicly_queryable )
			.map( ( tax ) => ( {
				label: tax.name,
				value: tax.slug,
			} ) ),
	];

	const termOptions = [
		{ label: __( 'Select a term', 'next-recent-posts-badge' ), value: '0' },
		...( terms || [] ).map( ( term ) => ( {
			label: term.name,
			value: term.id.toString(),
		} ) ),
	];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Badge Settings', 'next-recent-posts-badge' ) }
				>
					<SelectControl
						label={ __( 'Taxonomy', 'next-recent-posts-badge' ) }
						value={ taxonomy }
						options={ taxonomyOptions }
						onChange={ ( value ) => {
							setAttributes( { taxonomy: value, termId: 0 } );
						} }
					/>
					{ taxonomy && (
						<SelectControl
							label={ __( 'Term', 'next-recent-posts-badge' ) }
							value={ termId.toString() }
							options={ termOptions }
							onChange={ ( value ) =>
								setAttributes( { termId: parseInt( value ) } )
							}
						/>
					) }
					<TextControl
						label={ __( 'Days to check', 'next-recent-posts-badge' ) }
						type="number"
						value={ days }
						onChange={ ( value ) =>
							setAttributes( { days: parseInt( value ) || 7 } )
						}
						min="1"
					/>
					<TextControl
						label={ __( 'Badge text', 'next-recent-posts-badge' ) }
						value={ badgeText }
						onChange={ ( value ) =>
							setAttributes( { badgeText: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				{ ! taxonomy || termId === 0 ? (
					<div className="recent-posts-badge-placeholder">
						{ __(
							'Please select a taxonomy and term in the block settings',
							'next-recent-posts-badge'
						) }
					</div>
				) : (
					<>
						{ hasRecentPosts ? (
							<span className="recent-posts-badge">
								{ badgeText }
							</span>
						) : (
							<div className="recent-posts-badge-placeholder">
								{ __(
									'No recent posts found (badge will be hidden on frontend)',
									'next-recent-posts-badge'
								) }
							</div>
						) }
					</>
				) }
			</div>
		</>
	);
}
