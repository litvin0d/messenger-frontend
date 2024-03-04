<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="signup">
		<div class="signup__wrapper">
			<h1 class="signup__title">
				Sign Up to
				<span class="signup__title-name">Messenger</span>
			</h1>

			<form class="signup__form form">
				<fieldset class="form__section">
					<label class="form__label" for="full-name">Full Name</label>
					<input
						id="full-name"
						class="form__input"
						type="text"
						inputmode="text"
						placeholder="Enter Full Name"
					/>

					<label class="form__label" for="username">Username</label>
					<input
						id="username"
						class="form__input"
						type="text"
						inputmode="text"
						placeholder="Enter username"
					/>

					<label class="form__label" for="password">Password</label>
					<input
						id="password"
						class="form__input"
						type="password"
						inputmode="text"
						placeholder="Enter password"
					/>

					<label class="form__label" for="confirm-password">Confirm password</label>
					<input
						id="confirm-password"
						class="form__input"
						type="password"
						inputmode="text"
						placeholder="Confirm password"
					/>
				</fieldset>

				<fieldset class="form__section form__section--inline">
					<legend class="form__label">Select your gender</legend>

					<div class="form__radio">
						<input id="male" class="form__radio-input" type="radio" name="gender" value="male" />
						<label for="male" class="form__label">Male</label>
					</div>
					<div class="form__radio">
						<input id="female" class="form__radio-input" type="radio" name="gender" value="female" />
						<label for="female" class="form__label">Female</label>
					</div>
					<div class="form__radio">
						<input id="other" class="form__radio-input" type="radio" name="gender" value="other" disabled />
						<label for="other" class="form__label">Other</label>
					</div>
				</fieldset>

				<div class="form__section">
					<span class="form__question">
						Already have an account?
						<router-link class="form__question-link" to="/signup">Login</router-link>
					</span>
				</div>

				<div class="form__section">
					<button class="form__submit">Sign Up</button>
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
</style>
