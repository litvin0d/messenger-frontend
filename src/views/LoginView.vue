<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const isLoading = ref<boolean>(false);
const errorMessage = ref('');

interface ILoginData {
	username: string;
	password: string;
}

const loginData: ILoginData = {
	username: '',
	password: '',
};

const validateLoginData = ({ username, password }: ILoginData): boolean => {
	if (!username || !password) {
		errorMessage.value = 'Fill in all fields.';
		return false;
	}

	return true;
};

const login = async () => {
	const success = validateLoginData(loginData);

	if (success) {
		try {
			isLoading.value = true;

			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(loginData),
			});

			const data = await res.json();

			if (data.error)
				errorMessage.value = data.error;
			else {
				localStorage.setItem('user', JSON.stringify(data));
				await router.push({ name: 'Home' });
			}
		} catch (error) {
			if (error instanceof Error)
				errorMessage.value = error.message;
		} finally {
			isLoading.value = false;
		}
	}
};
</script>

<template>
	<div class="login" :class="isLoading ? 'login--loading' : ''">
		<div class="login__wrapper">
			<h1 class="login__title">
				Login to
				<span class="login__title-name">Messenger</span>
			</h1>

			<span v-if="errorMessage" class="login__error">{{ errorMessage }}</span>

			<form @submit.prevent="login" class="login__form form">
				<div class="form__section">
					<label class="form__label" for="username">Username</label>
					<input v-model="loginData.username" class="form__input" name="username" type="text" placeholder="Enter username" />
					<label class="form__label" for="username">Password</label>
					<input v-model="loginData.password" class="form__input" name="password" type="password" placeholder="Enter password" />
				</div>

				<div class="form__section">
					<span class="form__question">
						Don't have an account?
						<router-link class="form__question-link" to="/signup">Sign Up</router-link>
					</span>
				</div>

				<div class="form__section">
					<button class="form__submit">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem"

.login
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	min-width: rem(384)
	margin: 0 auto

	&__error
		display: inline-flex
		justify-content: center
		width: 100%
		padding: rem(8) 0

		font-weight: 600

		color: var(--color-negative)
		border: 2px solid var(--color-negative)
		border-radius: rem(8)

	&__wrapper
		width: 100%
		padding: rem(24)
		border-radius: rem(8)
		background-color: var(--color-neutral-600)

	&__title
		margin-bottom: rem(16)

		font-size: rem(30)
		line-height: rem(36)
		font-weight: 600
		text-align: center

	&__title-name
		color: var(--color-primary-500)

	&--loading
		opacity: .5
		pointer-events: none
</style>
