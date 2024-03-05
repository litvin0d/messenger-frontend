<script setup lang="ts">
import MessageItem from '@/components/messages/MessageItem.vue';
</script>

<template>
	<div class="messages-list">
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
		<message-item />
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.messages-list
	flex: 1 1 0
	overflow-y: auto
	padding-bottom: rem(80)

	scrollbar-color: var(--color-neutral-500) var(--color-neutral-600)
	scrollbar-width: thin

	&::-webkit-scrollbar
		width: 6px
		-webkit-appearance: none
		appearance: none

	&::-webkit-scrollbar-track
		border-radius: 4px
		background: var(--color-neutral-600)

	&::-webkit-scrollbar-thumb
		border: 4px solid var(--color-neutral-500)
		border-radius: 2px
		background-color: var(--color-neutral-500)
</style>
