module.exports = {
	base: '/algopress/',
	assetsPublicPath: '/',
	title: 'Algorithm Note',
	serviceWorker: true,
	themeConfig: {
		nav: [{ text: 'Home', link: '/' }],
		sidebar: [['/', 'Overview'], '/docs/dfs/dfs', '/docs/dp/dp'],
	},
	head: [
		['link', { rel: 'icon', href: '/images/icon-144x144.png' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
	],
	plugins: [
		['@vuepress/back-to-top'],
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: true,
			},
		],
	],
};
