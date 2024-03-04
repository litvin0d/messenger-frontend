<script setup lang="ts">
import IconLogout from '@/components/icons/IconLogout.vue';
</script>

<template>
	<button class="logout">
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

	&__icon
		max-width: rem(24)
		max-height: rem(24)
		width: 100%
		height: 100%
		cursor: pointer
		transform: translateX(-8%)
</style>
