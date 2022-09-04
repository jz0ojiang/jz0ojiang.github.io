export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: '0o酱 - 个人主页 | 柴兽居'
        }
    },
    {
        path: '/blog:_(\/.*)?',
        name: 'blog',
        component: () => import('../views/Blog.vue'),
        meta: {
            title: '0o酱 - 个人博客 | 柴兽居'
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue'),
        meta: {
            title: '页面未找到 | 柴兽居'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]