import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () => import('../views/TasksView.vue'),
            meta: {requiredAuth: true} // acessa somente se a pessoa tiver login
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/login'
        }
    ]
})
export default router