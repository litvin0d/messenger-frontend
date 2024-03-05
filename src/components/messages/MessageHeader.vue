<script setup lang="ts"></script>

<template>
	<div class="message-header">
		<span class="message-header__name">Some name</span>
		<span class="message-header__status message-header__status--online">online</span>
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.message-header
	position: absolute
	top: rem(16)
	left: rem(16)
	right: rem(16)
	z-index: 10

	display: flex
	align-items: center
	justify-content: space-between
	height: rem(48)
	//width: 100%
	padding: 0 rem(16)

	border-radius: rem(9999)
	background-color: var(--color-neutral-400)

	&__name
		font-weight: 600

	&__status
		user-select: none
		color: var(--color-neutral-300)
		font-size: rem(14)
		line-height: rem(20)

		&--online
			color: var(--color-primary-400)
</style>
