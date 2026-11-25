import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe( 'NExT Recent Posts Badge', () => {
	test( 'プラグインが有効化されている', async ( { admin, page } ) => {
		await admin.visitAdminPage( 'plugins.php' );
		// data-slug は WordPress がプラグイン名を sanitize_title() した値
		const pluginRow = page.locator( 'tr[data-slug="next-recent-posts-badge"]' );
		await expect( pluginRow ).toHaveClass( /active/ );
	} );
} );
