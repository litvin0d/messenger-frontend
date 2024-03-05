<script setup lang="ts"></script>

<template>
	<div class="conversation-item">
		<div class="conversation-item__avatar online">
			<img
				class="conversation-item__avatar-img"
				src="https://avatar.iran.liara.run/public/boy?username=string"
				alt="Profile Picture"
			/>
		</div>
		<div class="conversation-item__title">
			<p class="conversation-item__name">Some name</p>
		</div>
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.conversation-item
	display: flex
	align-items: center
	gap: rem(16)
	padding: rem(8) rem(8)
	cursor: pointer

	border-radius: rem(8)

	transition: background-color .2s ease

	&:hover
		background-color: var(--color-neutral-500)

	&__avatar
		position: relative

		display: inline-flex
		user-select: none

		&.online::before
			content: ""
			position: absolute
			top: 7%
			right: 7%
			z-index: 10

			display: block
			width: 15%
			height: 15%

			background-color: var(--color-primary-400)
			border-radius: rem(9999)
			outline: 2px solid var(--color-neutral-500)

	&__avatar-img
		display: block
		overflow: hidden
		height: 100%
		width: rem(48)
		aspect-ratio: 1 / 1
		object-fit: cover

		border-radius: rem(9999)

	&__title
		display: flex
		flex-direction: column
		flex: 1 1 0

	&__name
		font-weight: 600
</style>
