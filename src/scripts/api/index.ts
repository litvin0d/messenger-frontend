import type { AxiosInstance } from 'axios';
import axios from 'axios';

import type { BaseResponse } from '@/scripts/api/types';
import { GLOBAL_OPTIONS } from '@/scripts/api/consts';

export const BaseAxios = axios.create({
	...GLOBAL_OPTIONS,
});

export default abstract class BaseAPI {
	protected abstract endpoint: string;

	protected http: AxiosInstance = BaseAxios;

	public create?(data: unknown): Promise<BaseResponse<unknown>>;

	public read?(identifier?: string, data?: unknown): Promise<BaseResponse<unknown>>;

	public update?(data: unknown, identifier?: string): Promise<BaseResponse<unknown>>;

	public delete?(identifier: string | number): Promise<BaseResponse<unknown>>;
}
