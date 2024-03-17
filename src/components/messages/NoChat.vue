<script setup lang="ts"></script>

<template>
	<div class="no-chat">
		<p class="no-chat__text">Select a chat to start messaging</p>
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.no-chat
	display: flex
	align-items: center
	justify-content: center
	min-width: rem(450)
	width: 100%
	height: 100%

	&__text
		color: var(--color-neutral-300)
		font-weight: 600
		font-size: rem(18)
		line-height: rem(28)
</style>
