# Recent Posts Badge

A WordPress block plugin that displays a customizable badge when there are recent posts from a specified taxonomy.

## Description

Recent Posts Badge allows you to display a "New" or custom badge indicator based on recent posts from a specific taxonomy term (category, tag, or custom taxonomy). Perfect for highlighting new content sections on your WordPress site.

## Features

- Display conditional badges based on recent posts
- Choose any taxonomy (categories, tags, or custom taxonomies)
- Set the number of days to consider posts as "recent"
- Customize badge text
- Full theme.json support with customizable:
  - Background and text colors
  - Padding and margins
  - Font size and line height

## Requirements

- WordPress 6.1 or higher
- PHP 7.4 or higher

## Installation

1. Clone or download this repository to your WordPress plugins directory:
   ```bash
   cd wp-content/plugins/
   git clone [repository-url] recent-posts-badge
   ```

2. Install dependencies:
   ```bash
   cd recent-posts-badge
   npm install
   ```

3. Build the block:
   ```bash
   npm run build
   ```

4. Activate the plugin through the WordPress admin panel

## Development

### Available Scripts

- `npm start` - Start development mode with live reload
- `npm run build` - Build production-ready files
- `npm run format` - Format code using WordPress standards
- `npm run lint:css` - Lint CSS/SCSS files
- `npm run lint:js` - Lint JavaScript files
- `npm run plugin-zip` - Create a distributable plugin zip file
- `npm run packages-update` - Update @wordpress packages

### Project Structure

```
recent-posts-badge/
├── build/              # Compiled files (generated)
├── src/
│   ├── block.json      # Block metadata and configuration
│   ├── index.js        # Block registration
│   ├── edit.js         # Editor component
│   ├── save.js         # Save component
│   ├── view.js         # Frontend interactivity
│   ├── render.php      # Server-side rendering
│   ├── editor.scss     # Editor styles
│   └── style.scss      # Frontend styles
├── package.json
└── recent-posts-badge.php  # Main plugin file
```

## Usage

1. Add the "Recent Posts Badge" block to any post or page
2. Configure the block settings in the sidebar:
   - **Taxonomy**: Select the taxonomy type (category, tag, or custom)
   - **Term ID**: Specify the taxonomy term ID
   - **Days**: Set how many days to consider posts as "recent" (default: 7)
   - **Badge Text**: Customize the badge text (default: "New")
3. Customize appearance using block settings:
   - Colors (background and text)
   - Spacing (padding and margin)
   - Typography (font size and line height)

## Block Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| taxonomy | string | "category" | The taxonomy to check for recent posts |
| termId | number | 0 | The term ID within the taxonomy |
| days | number | 7 | Number of days to consider posts as recent |
| badgeText | string | "New" | Text to display in the badge |

## License

This plugin is licensed under the GPLv2 or later.

## Author

WordPress Telex

## Changelog

### 0.1.0
- Initial release
- Basic badge functionality
- Taxonomy and term selection
- Customizable appearance options
