module.exports = {
    title: 'vuepress文档',
    description: 'vuepress文档描述',
    base: '/vuepress/', // 这里写你的仓库名称
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/jyjwebdocs/favicon.ico` }]
    ], //这里配置你的网页头部信息等
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '其他文档', items: [
              { text: 'demo1', link: 'http://www.baidu.com' },
              { text: 'demo2', link: 'http://www.baidu.cn' },
            ] }
          ],
        /**
         * 设置侧边栏最大深度
         * 一般是以单个md文件中的 # ## ### #### 这几个标题文字为锚点自动生成导航
         * **/
        sidebarDepth: 4,
        // 设置侧边栏内容
        sidebar: [
            {
                title: '第一个侧边栏',
                collapsable: true,
                children: ['/firstside/', '/firstside/otherModel', '/firstside/child/']  // 这个是根据自己的需求来订，对应自己在docs下的文件夹名，默认首页是README.md
            },
            {
                title: '第二个侧边栏',
                collapsable: true,
                children: [
                    '/second/',
                    {
                        title: '侧边栏组合',
                        collapsable: true,
                        children: [
                            '/second/child/',
                            '/second/child/secondChild'
                        ]
                    }
                ]
            }
        ]
    }
}
