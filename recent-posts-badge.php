<?php
/**
 * Plugin Name:       Recent Posts Badge
 * Description:       Displays a customizable badge when there are recent posts from a specified taxonomy
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            WordPress Telex
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       recent-posts-badge
 *
 * @package Telex
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function telex_recent_posts_badge_block_init() {
	register_block_type( __DIR__ . '/build/' );
}
add_action( 'init', 'telex_recent_posts_badge_block_init' );
