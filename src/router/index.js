import {createRouter,createWebHistory} from 'vue-router';

import LandingPage from '../pages/landing_page/index.vue';
import MonitoringData from '../pages/monitoring/data/index.vue';
import MonitoringCharts from '../pages/monitoring/charts/index.vue';
import MonitoringHistory from '../pages/monitoring/history/index.vue';

const routes = [
    {
        path:'/',
        name:"landing_page",
        component:LandingPage,
        meta:{
            title: "Landing Page",
            requiresAuth: true,
        },
    },

    {
        path:'/data',
        name:"data",
        component: MonitoringData,
        meta:{
            title: "MonitoringData",
            requiresAuth: true,
        },
    },

    {
        path:'/charts',
        name:"charts",
        component: MonitoringCharts,
        meta:{
            title: "MonitoringCharts",
            requiresAuth: true,
        },
    },

    {
        path:'/history',
        name:"history",
        component: MonitoringHistory,
        meta:{
            title: "MonitoringHistory",
            requiresAuth: true,
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 };
    },
});

export default router;