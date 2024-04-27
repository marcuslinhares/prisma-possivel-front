import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CadastroView from "@/views/CadastroView.vue";
import ConviteView from "@/views/ConviteView.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: HomeView
            },
            {
                path: '/cadastro',
                component: CadastroView
            },
            {
                path: '/convite',
                component: ConviteView
            }
        ]
    },
    {
        path: '/login',
        component: LoginLayout
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
