
import axios from 'axios';
// import { Feed } from "feed";

const dynamicRoutes = async () => {
    const t_routes = [];
    const db = await axios.get(process.env.API_URL+'/exportdb');

    for( const tool of db.data.tools ) {
        const route = {
            url: '/tool/' + tool.slug,
            lastmodISO: tool.updated_at,
            priority: 1
        };
        if( tool.images !== null && tool.images.length > 0 ) {
            route.img = [
                {
                    url: process.env.ASSETS_URL+'/tools/'+tool.images[0],
                    caption: tool.short_descr,
                    title: tool.nicename
                }
            ];
        }
        t_routes.push(route);
    }

    for( const tag of db.data.tags ) {
        const route = {
            url: '/tag/' + tag.slug,
            lastmodISO: tag.updated_at,
            priority: 0.3
        };
        t_routes.push(route);
    }

    return t_routes;
}

const createFeeds = async () => {
    const t_feeds = [];
    const db = await axios.get(process.env.API_URL+'/exportdb');
    const t_tools = db.data.tools.sort(
        (a, b) => (a.accepted_at > b.accepted_at ? -1 : 1)
    );

    const feed_all = {
        path: '/feed.xml', // The route to your feed.
        cacheTime: 1000 * 60 * 5, // How long should the feed be cached ?
        // cacheTime: -1, // How long should the feed be cached ?
        type: 'rss2', // Can be: rss2, atom1, json1
        async create( feed ) {
            feed.options = {
                title: process.env.APP_NAME,
                link: process.env.APP_URL,
                description: process.env.APP_DESCR,
                language: 'en',
                image: process.env.APP_URL+'/img/preview.png',
                // favicon: process.env.APP_URL+'/favicon.ico',
                // image: {
                //     title: process.env.APP_NAME,
                //     url: process.env.APP_URL+'/img/preview.png',
                // },
                // copyright: "All rights reserved 2013, John Doe",
                // lastBuildDate: new Date(2013, 6, 14), // optional, default = today
                // generator: "awesome", // optional, default = 'Feed for Node.js'
                // feedLinks: {
                //     json: "https://example.com/json",
                //     atom: "https://example.com/atom"
                // },
                author: [{
                    name: "Gwendal Le Coguic",
                    email: "g@offsec.tools",
                    link: "https://10degres.net"
                }]
            }

            for( const tool of t_tools ) {
                feed.addItem({
                    title: tool.nicename,
                    id: process.env.APP_URL+'/tool/' + tool.slug,
                    link: process.env.APP_URL+'/tool/' + tool.slug,
                    date: new Date( tool.accepted_at ),
                    image: process.env.ASSETS_URL+'/tools/'+tool.images[0],
                    description: tool.short_descr,
                    // content: tool.descr
                })
            }
        },
    }
    t_feeds.push(feed_all);

    const feed_l7d = {
        path: '/last7days.xml', // The route to your feed.
        cacheTime: 1000 * 60 * 5, // How long should the feed be cached ?
        // cacheTime: -1, // How long should the feed be cached ?
        type: 'rss2', // Can be: rss2, atom1, json1
        async create( feed ) {
            feed.options = {
                title: process.env.APP_NAME,
                link: process.env.APP_URL,
                description: process.env.APP_DESCR,
                language: 'en',
                image: process.env.APP_URL+'/img/preview.png',
            }

            var d_current = new Date();
            var d7 = new Date( d_current.getFullYear(), d_current.getMonth(), d_current.getDate()-7);

            for( const tool of t_tools ) {
                var td = new Date(tool.accepted_at);
                if( td > d7 ) {
                    feed.addItem({
                        title: tool.nicename,
                        id: process.env.APP_URL+'/tool/' + tool.slug,
                        link: process.env.APP_URL+'/tool/' + tool.slug,
                        date: new Date( tool.accepted_at ),
                        image: process.env.ASSETS_URL+'/tools/'+tool.images[0],
                        description: tool.short_descr,
                        // content: tool.descr
                    })
                }
            }
        },
    }
    t_feeds.push(feed_l7d);

    return t_feeds;
}

export default {
    // https://nuxtjs.org/docs/concepts/server-side-rendering
    ssr: true,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: process.env.APP_TITLE,
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', name: 'keywords', content: process.env.APP_KEYWORDS },
            { hid: 'description', name: 'description', content: process.env.APP_DESCR },
            { property: 'og:locale', content: 'en_US' },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: process.env.APP_NAME },
            { hid: 'og:url', property: 'og:url', content: process.env.APP_URL },
            { hid: 'og:title', property: 'og:title', content: process.env.APP_TITLE },
            { hid: 'og:description', property: 'og:description', content: process.env.APP_DESCR },
            { hid: 'og:image', property: 'og:image', content: process.env.APP_URL+'/img/preview.png' },
            { name: 'twitter:site', content: 'gwendallecoguic' },
            { name: 'twitter:creator', content: 'gwendallecoguic' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: process.env.APP_TITLE },
            { hid: 'twitter:description', name: 'twitter:description', content: process.env.APP_DESCR },
            { hid: 'twitter:image', name: 'twitter:image', content: process.env.APP_URL+'/img/preview.png' },
        ],
        link: [
            { hid: 'canonical', rel: 'canonical', href: process.env.APP_URL },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preload', href: process.env.ASSETS_URL, type: 'image', as: 'image' },
            { rel: 'alternate', href: process.env.APP_URL+'/last7days.xml', type: 'application/rss+xml', title: 'Tools added last week on '+process.env.APP_NAME },
        ],
        script: [
            { src: "/js/bootstrap.bundle.min.js" },
            { src: "/js/masonry.pkgd.min.js" },
        ]
    },
    // <link rel="preload" href="/telfront/modern/fonts/inter-v7-latin.c8186f6f0b5f997e3697.woff2" as="font" type="font/woff2" crossorigin>

    router: {
        mode: 'history'
    },

    basePath: '/',

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/bootstrap.min.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/custom.css',
    ],

    // Loading bar https://nuxtjs.org/docs/2.x/features/loading
    loading: {
        color: '#22d3ee',
        height: '2px'
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/feed',
        '@nuxtjs/sitemap',
        '@nuxt/image',
        '@nuxtjs/dayjs',
        '@nuxtjs/redirect-module',
    ],

    // https://github.com/nuxt-community/feed-module
    feed: createFeeds,

    redirect: {
        rules: (process.env.APP_ENV!='prod') ? [
            // non production rules
        ] : [
            // production rules
            { from: '^/img/tools/(.*)$', to: process.env.ASSETS_URL+'/tools/$1', statusCode: 301 }
            { from: '^/tag/last7days$', to: process.env.ASSETS_URL+'/last7days', statusCode: 301 }
        ]
    },

    plugins: [
        '~/plugins/fontawesome.js',
        '~/plugins/app-mounted.js',
        '~/plugins/gtag.js',
    ],

    sitemap: {
        hostname: process.env.APP_URL,
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_URL,
    },

    // public vars
    publicRuntimeConfig: {
        APP_NAME: process.env.APP_NAME,
        APP_TITLE: process.env.APP_TITLE,
        APP_DESCR: process.env.APP_DESCR,
        APP_KEYWORDS: process.env.APP_KEYWORDS,
        APP_URL: process.env.APP_URL,
        APP_ENV: process.env.APP_ENV,
        GITHUB_URL: process.env.GITHUB_URL,
        ANALYTICS_URL: process.env.ANALYTICS_URL,
        NEWSLETTER_SUBSCRIBE_URL: process.env.NEWSLETTER_SUBSCRIBE_URL,
        ASSETS_URL: process.env.ASSETS_URL
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true
    },

    generate: {
        fallback: "404.html",
        routes: dynamicRoutes,
    },
}
