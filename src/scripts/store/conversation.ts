import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface IConversation {
	id: string;
	fullName: string;
	username: string;
	gender: 'male' | 'female';
	profilePic: string,
}

export const useConversation = defineStore('conversation', () => {
	const selectedConversation = ref<IConversation | null>(null);
	const setSelectedConversation = (value: IConversation | null) => {
		selectedConversation.value = value;
	}

	const messages = ref<string[]>([]);
	const setMessages = (value: string[]) => {
		messages.value = value;
	}

	return {
		selectedConversation,
		setSelectedConversation,
		messages,
		setMessages,
	}
})
