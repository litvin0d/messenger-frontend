import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/HomeView.vue'),
		meta: {
			name: 'Home',
		},

	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/LoginView.vue'),
		meta: {
			name: 'Login',
		},
	},
	{
		path: '/signup',
		name: 'SignUp',
		component: () => import('@/views/SignUpView.vue'),
		meta: {
			name: 'SignUp',
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeResolve((to, _, next) => {
	if (to.meta.name) document.title = to.meta.name as string;

	next();
});

router.beforeEach((to, from, next) => {
	const user = localStorage.getItem('user');

	if ((to.name === 'SignUp' || to.name === 'Login') && user) next({ name: 'Home' });
	else if (to.name === 'Home' && !user) next({ name: 'Login' });
	else next();
})

export default router;
