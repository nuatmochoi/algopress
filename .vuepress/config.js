module.exports = {
	base: '/algopress/',
	assetsPublicPath: '/',
	title: 'Algorithm Note',
	serviceWorker: true,
	themeConfig: {
		nav: [{ text: 'Home', link: '/' }],
		sidebar: [
			['/', 'Overview'],
			'/docs/bfs/bfs',
			'/docs/dfs/dfs',
			'/docs/dp/dp',
			'/docs/hash/hash',
			'/docs/greedy/greedy',
			'/docs/binary_search/binary_search',
			'/docs/stack/stack',
			'/docs/queue/queue',
			'/docs/sort/sort',
			'/docs/heap/heap',
			'/docs/brute_force/brute_force',
			'/docs/string/string',
			'/docs/graph/graph',
			'/docs/simulation/simulation',
		],
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
