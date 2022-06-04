import axios from 'axios'
import { BaseApi } from '@/api/baseApi'

export class AxiosApi extends BaseApi {
    constructor() {
        super()
    }

    // eslint-disable-next-line
    async fetch(url: string): Promise<any> {
        const { data } = await axios.get(`${this.baseUrl}${url}`)
        return data
    }
}