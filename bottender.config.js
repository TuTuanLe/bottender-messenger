module.exports = {
    session: {
        driver: 'memory',

        stores: {
            memory: {
                maxSize: 500,
            },
            file: {
                dirname: '.sessions',
            },
            redis: {
                port: 6379,
                host: '127.0.0.1',
                password: 'auth',
                db: 0,
            },
            mongo: {
                url: 'mongodb://localhost:27017',
                collectionName: 'sessions',
            },
        },
    },
    initialState: {
        status: 'START',
        codeId: '',
        timeRemaining: 10,
    },
    channels: {
        messenger: {
            enabled: true,
            path: '/webhooks/messenger',
            pageId: process.env.MESSENGER_PAGE_ID,
            accessToken: process.env.MESSENGER_ACCESS_TOKEN,
            appId: process.env.MESSENGER_APP_ID,
            appSecret: process.env.MESSENGER_APP_SECRET,
            verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
            profile: {
                getStarted: {
                    payload: 'GET_STARTED',
                },
                persistentMenu: [
                    {
                        locale: 'default',
                        composerInputDisabled: false,
                        callToActions: [
                            {
                                type: 'postback',
                                title: 'đi đến cuộc trò chuyện',
                                payload: 'CARE_HELP',
                            },
                            {
                                type: 'postback',
                                title: 'thông tin về ứng dụng',
                                payload: 'CURATION',
                            },
                            {
                                type: 'web_url',
                                title: 'đi đến trang web',
                                url: 'https://postman-frontend.vercel.app/',
                                webviewHeightRatio: 'full',
                            },
                        ],
                    },
                ],
            },
        },
    },
};
