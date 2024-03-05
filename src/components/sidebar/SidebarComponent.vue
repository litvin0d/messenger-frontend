<script setup lang="ts">
import SearchInput from '@/components/sidebar/SearchInput.vue';
import ConversationsList from '@/components/sidebar/ConversationsList.vue';
import LogoutButton from '@/components/sidebar/LogoutButton.vue';
</script>

<template>
	<aside class="sidebar">
		<search-input />
		<hr class="sidebar__divider" />
		<conversations-list />
		<logout-button />
	</aside>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.sidebar
	position: relative

	display: flex
	flex-direction: column
	padding: rem(16) rem(16) 0 rem(16)
	border-right: 1px solid var(--color-neutral-500)

	&__divider
		display: flex
		flex-direction: row
		align-items: center
		align-self: stretch
		margin-top: rem(16)
		margin-bottom: rem(16)
		height: rem(16)
		white-space: nowrap

		&::before, &::after
			content: ''
			height: rem(2)
			width: 100%
			flex-grow: 1
			background-color: var(--color-neutral-500)
</style>
