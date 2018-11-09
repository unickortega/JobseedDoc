module.exports = {
    title: 'Jobseed Docs',
    description: 'Jobseed Feature Documentation',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'About Me', link: 'https://www.facebook.com/uelmar.ortega' },
        ],
        serviceWorker: true,
        sidebar: {
            '/guide/': [
                '',
                'apply',
                'create-company'
            ]
        }
    }
}