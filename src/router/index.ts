import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _, next) => {
    /* 路由发生变化修改页面title */
    if (typeof to.meta.title === 'string' && to.meta.title.length > 0) {
      document.title = to.meta.title
    }
    next()
  })

export default router