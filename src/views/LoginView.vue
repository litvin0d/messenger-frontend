<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="login">
		<div class="login__wrapper">
			<h1 class="login__title">
				Login to
				<span class="login__title-name">Messenger</span>
			</h1>

			<form class="login__form form">
				<div class="form__section">
					<label class="form__label" for="username">
						<span class="form__label-text">Username</span>
					</label>
					<input class="form__input" name="username" type="text" placeholder="Enter username" />
					<label class="form__label" for="username">
						<span class="form__label-text">Password</span>
					</label>
					<input class="form__input" name="password" type="password" placeholder="Enter password" />
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
