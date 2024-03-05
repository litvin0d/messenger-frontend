<script setup lang="ts">
import IconSend from '@/components/icons/IconSend.vue';
</script>

<template>
	<form class="message-input">
		<input class="message-input__input" type="text" inputmode="text" placeholder="Send a message" />
		<button class="message-input__button" disabled>
			<icon-send class="message-input__icon" />
		</button>
	</form>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.message-input
	position: absolute
	left: rem(16)
	right: rem(16)
	bottom: rem(16)
	z-index: 10

	display: flex
	align-items: center
	gap: rem(8)

	&__input
		width: 100%
		flex-shrink: 1
		height: rem(48)
		padding: 0 rem(16)
		appearance: none

		background-color: var(--color-neutral-700)
		border: 1px solid var(--color-neutral-600)
		border-radius: rem(9999)

		font-size: rem(14)
		line-height: rem(20)

		&:focus, &:focus-within
			box-shadow: none
			outline-offset: 2px
			outline: 2px solid var(--color-neutral-500)

		&.disabled, &:disabled, &[disabled]
			cursor: not-allowed
			pointer-events: none

	&__button
		display: inline-flex
		align-items: center
		justify-content: center
		width: rem(58)
		height: rem(48)
		gap: rem(8)

		background-color: var(--color-primary-600)
		border-radius: 50%
		outline-color: var(--color-neutral-500)

		text-align: center
		font-size: rem(14)
		line-height: 1em
		font-weight: 600
		text-decoration-line: none

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
			background-color: var(--color-neutral-400)

	&__icon
		max-width: rem(24)
		max-height: rem(24)
		width: 100%
		height: 100%
		outline-color: transparent
		transform: translateY(5%)
</style>
