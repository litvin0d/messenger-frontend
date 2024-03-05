<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue';
import MessageContainer from '@/components/messages/MessageContainer.vue';
</script>

<template>
	<div class="home">
		<sidebar-component />
		<message-container />
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.home
	display: flex
	height: rem(550)
	overflow: hidden

	background-color: var(--color-neutral-600)
	border-radius: rem(8)
</style>
