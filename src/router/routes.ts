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
    }
]