import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Main',
		component: () => import('@/views/MainView.vue'),
		meta: {
			name: 'Главная',
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeResolve((to, _, next) => {
	if (to.meta.name) document.title = to.meta.name as string;

	next();
});

export default router;
