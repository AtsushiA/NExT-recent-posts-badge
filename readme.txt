
=== NExT Recent Posts Badge ===

Contributors:      NExT-Season
Tags:              block, badge, posts, taxonomy, recent
Tested up to:      6.8
Stable tag:        0.1.0
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A dynamic badge that displays custom text when there are recent posts from a specified taxonomy.

== Description ==

The NExT Recent Posts Badge block allows you to display a customizable badge on your site that only appears when there are posts from a specified taxonomy that are newer than a defined number of days.

Perfect for highlighting new content, recent updates, or fresh posts in specific categories or custom taxonomies. The block gives you full control over:

* The taxonomy to check (categories, tags, or custom taxonomies)
* The specific term within that taxonomy
* How many days back to check for posts
* The badge text to display
* Badge styling and appearance

The block is fully dynamic and will automatically show or hide based on whether recent posts exist, making it ideal for "New Content" indicators, "Recently Updated" badges, or any similar notification.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/NExT-recent-posts-badge` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Add the "NExT Recent Posts Badge" block to any post or page
4. Configure the taxonomy, term, days threshold, and badge text in the block settings

== Frequently Asked Questions ==

= Which taxonomies can I use? =

You can use any public taxonomy registered in WordPress, including the default Categories and Tags, as well as any custom taxonomies registered by your theme or other plugins.

= What happens if no recent posts are found? =

The badge will simply not display. The block only renders when it finds posts matching your criteria.

= Can I style the badge? =

Yes! The badge inherits your theme's styling and you can add custom CSS to further customize its appearance.

= How is "recent" determined? =

You specify the number of days in the block settings. The block will check for posts published within that many days from the current date.

== Screenshots ==

1. Block settings panel showing taxonomy, term, and days configuration
2. Example badge displayed on the front end
3. Block in the editor with inspector controls

== Changelog ==

= 0.1.0 =
* Initial release
* Support for all public taxonomies
* Configurable days threshold
* Customizable badge text
* Dynamic rendering based on recent posts

== Usage ==

1. Add the block to your content
2. In the block settings sidebar:
   - Select a taxonomy (e.g., "Category", "Tag")
   - Choose a specific term from that taxonomy
   - Set the number of days to check
   - Enter your badge text
3. The badge will automatically appear when recent posts exist in the selected term

The block is perfect for:
* "New Articles" badges on category archives
* "Recently Updated" indicators
* "Fresh Content" notifications
* Any conditional display based on recent posts
