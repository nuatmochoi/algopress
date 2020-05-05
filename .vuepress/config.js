module.exports = { 
    base : '/algopress/',
    assetsPublicPath: '/',
    title : 'Algorithm Note',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [
            ['/', 'Overview'],
            '/docs/dfs/dfs',
            '/docs/dp/dp'
        ]
    },
    plugins: ['@vuepress/back-to-top']
}
