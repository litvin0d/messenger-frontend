<script setup lang="ts">
import { reactive, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

interface ISubmitData {
	fullName: string;
	username: string;
	password: string;
	confirmPassword: string;
	gender: string;
}

const submitData: ISubmitData = reactive({
	fullName: '',
	username: '',
	password: '',
	confirmPassword: '',
	gender: '',
});

const router = useRouter()
const errorMessage = ref('');
const isLoading = ref<boolean>(false);

const validateSubmitData = ({ fullName, username, password, confirmPassword, gender }: ISubmitData): boolean => {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		errorMessage.value = 'Fill in all fields!';
		return false;
	}

	if (password !== confirmPassword) {
		errorMessage.value = 'Password mismatch!';
		return false;
	}

	// eslint-disable-next-line no-magic-numbers
	if (password.length < 6) {
		errorMessage.value = 'Password must be at least 6 characters!';
		return false;
	}

	if (gender !== 'male' && gender !== 'female') {
		errorMessage.value = 'There is only two genders!';
		return false;
	}

	errorMessage.value = '';
	return true;
};

const handleSubmit = async () => {
	const success = validateSubmitData(submitData);

	if (success) {
		try {
			isLoading.value = true;

			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(submitData),
			});

			const data = await res.json();

			if (data.error)
				errorMessage.value = data.error;
			else {
				localStorage.setItem('user', JSON.stringify(data));
				await router.push({ name: 'Home' })
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
	<div class="signup" :class="isLoading ? 'signup--loading' : ''">
		<div class="signup__wrapper">
			<h1 class="signup__title">
				Sign Up to
				<span class="signup__title-name">Messenger</span>
			</h1>

			<span v-if="errorMessage" class="signup__error">{{ errorMessage }}</span>

			<form @submit.prevent="handleSubmit" class="signup__form form">
				<fieldset class="form__section">
					<label class="form__label" for="full-name">Full Name</label>
					<input
						v-model="submitData.fullName"
						id="full-name"
						class="form__input"
						type="text"
						inputmode="text"
						autocomplete="name"
						placeholder="Enter Full Name"
					/>

					<label class="form__label" for="username">Username</label>
					<input
						v-model="submitData.username"
						id="username"
						class="form__input"
						type="text"
						inputmode="text"
						autocomplete="username"
						placeholder="Enter username"
					/>

					<label class="form__label" for="password">Password</label>
					<input
						v-model="submitData.password"
						id="password"
						class="form__input"
						type="password"
						inputmode="text"
						autocomplete="new-password"
						placeholder="Enter password"
					/>

					<label class="form__label" for="confirm-password">Confirm password</label>
					<input
						v-model="submitData.confirmPassword"
						id="confirm-password"
						class="form__input"
						type="password"
						inputmode="text"
						autocomplete="new-password"
						placeholder="Confirm password"
					/>
				</fieldset>

				<fieldset class="form__section form__section--inline">
					<legend class="form__label">Select your gender</legend>

					<div class="form__radio">
						<input v-model="submitData.gender" id="male" class="form__radio-input" type="radio"
						       name="gender" value="male" />
						<label for="male" class="form__label">Male</label>
					</div>
					<div class="form__radio">
						<input v-model="submitData.gender" id="female" class="form__radio-input" type="radio"
						       name="gender" value="female" />
						<label for="female" class="form__label">Female</label>
					</div>
					<div class="form__radio">
						<input v-model="submitData.gender" id="other" class="form__radio-input" type="radio"
						       name="gender" value="other" />
						<label for="other" class="form__label">Other</label>
					</div>
				</fieldset>

				<div class="form__section">
					<span class="form__question">
						Already have an account?
						<router-link class="form__question-link" to="/login">Login</router-link>
					</span>
				</div>

				<div class="form__section">
					<button class="form__submit" type="submit" :disabled="isLoading">Sign Up</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem"

.signup
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	min-width: rem(384)
	margin: 0 auto

	transition: opacity .2s ease

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
