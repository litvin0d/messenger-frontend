<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import IconLogout from '@/components/icons/IconLogout.vue';

const router = useRouter();
const isLoading = ref<boolean>(false);

const logout = async () => {
	isLoading.value = true;

	try {
		const res = await fetch('/api/auth/logout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await res.json();

		if (!data.error) {
			localStorage.removeItem('user');
			await router.push({ name: 'Login' });
		}
	} catch (error) {
		if (error instanceof Error)
			throw error;
	} finally {
		isLoading.value = false;
	}
}
</script>

<template>
	<button @click="logout" class="logout" :disabled="isLoading">
		<icon-logout class="logout__icon" />
	</button>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.logout
	position: absolute
	left: rem(16)
	bottom: rem(16)
	z-index: 10

	display: inline-flex
	align-items: center
	justify-content: center
	width: rem(48)
	height: rem(48)

	background-color: var(--color-neutral-400)
	border-radius: 50%
	outline-color: var(--color-neutral-500)

	cursor: pointer
	user-select: none

	transition: background-color .3s ease

	&:focus
		outline: 2px solid var(--color-neutral-500)
		outline-offset: 2px

	&:hover
		background-color: var(--color-primary-500)

	&.disabled, &[disabled], &:disabled
		cursor: not-allowed
		opacity: .5

		&:hover
			background-color: var(--color-neutral-400)

	&__icon
		max-width: rem(24)
		max-height: rem(24)
		width: 100%
		height: 100%
		cursor: pointer
		transform: translateX(-8%)
</style>
