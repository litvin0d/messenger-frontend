<script setup lang="ts"></script>

<template>
	<div class="message-item message-item--left">
		<div class="message-item__avatar">
			<img
				class="message-item__avatar-img"
				src="https://avatar.iran.liara.run/public/boy?username=string"
				alt="Profile Picture"
			/>
		</div>
		<div class="message-item__text">some message</div>
		<div class="message-item__footer">13:37 05.03.2024</div>
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.message-item
	display: grid
	grid-template-columns: repeat(2, minmax(0, 1fr))
	column-gap: rem(12)
	padding: rem(4) 0

	&__avatar
		position: relative

		display: inline-flex
		user-select: none
		grid-row: span 2 / span 2
		align-self: flex-end

	&__avatar-img
		display: block
		overflow: hidden
		height: 100%
		width: rem(48)
		aspect-ratio: 1 / 1
		object-fit: cover

		border-radius: rem(9999)

	&__text
		position: relative

		display: block
		min-width: rem(44)
		min-height: rem(44)
		max-width: 90%
		width: fit-content
		padding: rem(8) rem(16)

		border-radius: rem(16)
		background-color: var(--color-neutral-500)
		color: var(--color-neutral-100)

		&::before
			content: ""
			position: absolute
			bottom: 0

			height: rem(12)
			width: rem(12)

			background-color: inherit
			mask-size: contain
			mask-repeat: no-repeat
			mask-position: center

	&__footer
		display: inline-flex
		align-items: center
		grid-row-start: 3
		gap: rem(4)

		opacity: .5

		font-size: rem(12)
		line-height: rem(16)

	&--left
		place-items: start
		grid-template-columns: auto 1fr

		.message-item__avatar
			grid-column-start: 1

		.message-item__text
			grid-column-start: 2
			border-end-start-radius: 0

			&::before
				mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e")
				inset-inline-start: -0.749rem

		.message-item__footer
			grid-column-start: 2

	&--right
		place-items: end
		grid-template-columns: 1fr auto

		.message-item__avatar
			grid-column-start: 2

		.message-item__text
			grid-column-start: 1
			border-end-end-radius: 0

			&::before
				mask-image: url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e")
				inset-inline-start: 99.9%

		.message-item__footer
			grid-column-start: 1
</style>
