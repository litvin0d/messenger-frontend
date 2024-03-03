import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import { AxiosError } from 'axios';

import type { BaseState } from '@/scripts/store/types';
import type { ErrorResponse } from '@/scripts/api/types';

const toast = useToast();

const useBaseStore = defineStore('base', {
	state: (): BaseState => ({
		loadingPool: new Set(),
	}),
	actions: {
		startLoading(actionName: string) {
			this.loadingPool.add(actionName);
		},
		stopLoading(actionName: string) {
			if (!this.loadingPool.has(actionName)) throw new Error(`${actionName}: Not found in loading pool.`);

			this.loadingPool.delete(actionName);
		},
		errorMessage(message: string) {
			toast.error(message);
		},
		warningMessage(message: string) {
			toast.warning(message);
		},
		infoMessage(message: string) {
			toast.info(message);
		},
		successMessage(message: string) {
			toast.success(message);
		},
		getError(error: string | AxiosError<ErrorResponse>, shouldToast = false): string {
			let message: string;

			if (error instanceof AxiosError) message = error.response?.data.error.message || error.message;
			else message = error;

			message = message.replace(/<br>/gu, ' ');
			message = message.replace(/<\/br>/gu, ' ');
			message = message.replace(/\n/gu, ' ');

			if (shouldToast) this.errorMessage(message);

			return message;
		},
	},
	getters: {
		isLoading(): boolean {
			return Boolean(this.loadingPool.size);
		},
		isActionPending(): (actionName: string) => boolean {
			return (actionName) => this.loadingPool.has(actionName);
		},
	},
});

export default useBaseStore;
