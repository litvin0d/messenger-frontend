<script setup lang="ts">
import NoChat from '@/components/messages/NoChat.vue';
import MessageHeader from '@/components/messages/MessageHeader.vue';
import MessagesList from '@/components/messages/MessagesList.vue';
import MessageInput from '@/components/messages/MessageInput.vue';
import { useConversation } from '@/scripts/store/conversation';
import { onUnmounted } from 'vue';

const conversationStore = useConversation();

onUnmounted(() => conversationStore.setSelectedConversation(null))
</script>

<template>
	<div class="message-container">
		<no-chat v-if="!conversationStore.selectedConversation" />
		<message-header v-if="conversationStore.selectedConversation" :name="conversationStore.selectedConversation.fullName" />
		<messages-list v-if="conversationStore.selectedConversation" />
		<message-input v-if="conversationStore.selectedConversation" />
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.message-container
	position: relative

	display: flex
	flex-direction: column
	min-width: rem(450)
	padding: 0 rem(16)

	&::before
		content: ''
		position: absolute
		top: 0
		left: 0
		right: 0
		height: rem(80)
		box-shadow: 0 rem(80) rem(16) rem(-16) rgba(59,66,82,1) inset
		z-index: 1

	&::after
		content: ''
		position: absolute
		left: 0
		right: 0
		bottom: 0
		height: rem(80)
		box-shadow: 0 rem(-80) rem(16) rem(-16) rgba(59,66,82,1) inset
		z-index: 5
</style>
