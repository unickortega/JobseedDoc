module.exports = {
    title: 'Jobseed Docs',
    description: 'Jobseed Feature Documentation',
    head: [
        [
            'link', 
            { rel: 'icon', href: `/images/logo.png` }
        ],
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'About Nexseed', link: 'https://nexseed.net/' },
        ],
        serviceWorker: true,
        sidebar: {
            '/guide/': [
                '',
                'apply',
                'create-company',
                'how-to-track-application-progress'
            ]
        }
    }
}