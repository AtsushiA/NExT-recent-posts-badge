<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$taxonomy = isset( $attributes['taxonomy'] ) && taxonomy_exists( $attributes['taxonomy'] )
	? sanitize_key( $attributes['taxonomy'] )
	: 'category';
$term_id  = isset( $attributes['termId'] ) ? absint( $attributes['termId'] ) : 0;
$days     = isset( $attributes['days'] ) ? absint( $attributes['days'] ) : 7;
$badge_text = isset( $attributes['badgeText'] ) ? $attributes['badgeText'] : __( 'New', 'next-recent-posts-badge' );

if ( $term_id === 0 ) {
	return;
}

$date_threshold = gmdate( 'Y-m-d H:i:s', strtotime( "-{$days} days" ) );

$args = array(
	'posts_per_page' => 1,
	'post_status'    => 'publish',
	'date_query'     => array(
		array(
			'after' => $date_threshold,
		),
	),
	'tax_query'      => array(
		array(
			'taxonomy' => $taxonomy,
			'field'    => 'term_id',
			'terms'    => $term_id,
		),
	),
);

$query = new WP_Query( $args );

if ( ! $query->have_posts() ) {
	wp_reset_postdata();
	return;
}

wp_reset_postdata();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<span class="recent-posts-badge">
		<?php echo esc_html( $badge_text ); ?>
	</span>
</div>
