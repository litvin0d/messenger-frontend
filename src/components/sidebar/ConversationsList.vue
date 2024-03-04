<script setup lang="ts">
import ConversationItem from '@/components/sidebar/ConversationItem.vue';
</script>

<template>
	<div class="conversations-list">
		<conversation-item />
		<conversation-item />
		<conversation-item />
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"
@import "@/styles/base/mixins/scroll/v-scroll"

.conversations-list
	display: flex
	flex-direction: column
	padding: rem(8) 0
	overflow-y: auto

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
