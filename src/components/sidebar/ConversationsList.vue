<script setup lang="ts">
import ConversationItem from '@/components/sidebar/ConversationItem.vue';
import { onMounted, ref } from 'vue';
import type { IConversation } from '@/scripts/store/conversation';

const users = ref<IConversation[]>([])
const errorMessage = ref('')

const fetchConversations = async () => {
	try {
		const res = await fetch(`/api/users`, {
			method: 'GET',
			credentials: 'same-origin',
		});
		const data = await res.json();

		if (data.error)
			errorMessage.value = data.error;
		else
			users.value = data;
	} catch (error) {
		if (error instanceof Error)
			errorMessage.value = error.message;
	}
}

onMounted(() => {
	fetchConversations()
})
</script>

<template>
	<div class="conversations-list">
		<conversation-item
			v-for="user in users"
			:key="user.id"
			:conversation="user"
			:avatar-img="user.profilePic"
			:name="user.fullName"
		/>
	</div>
</template>

<style scoped lang="sass">
@import "@/styles/base/functions/rem.sass"

.conversations-list
	display: flex
	flex-direction: column
	padding: rem(8) 0 rem(64)
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
