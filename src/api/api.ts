import { BaseApi } from '@/api/baseApi';
import { AxiosApi } from '@/api/axiosApi';
import { IApi } from '@/types';

export class Api extends BaseApi implements IApi {
    private provider: BaseApi = new AxiosApi();
    // eslint-disable-next-line
    async fetch(url: string): Promise<any> {
        return await this.provider.fetch(url)
    }
}