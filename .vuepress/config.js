module.exports = {
    title: 'Jobseed Docs',
    description: 'Documentation on how to use Jobseed',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide' },
            { text: 'About Me', link: 'https://www.facebook.com/uelmar.ortega' },
        ],
        serviceWorker: true,
        sidebar: {
            '/guide/': [
                '',
                'frontend',
                'backend'
            ]
        }
    }
}