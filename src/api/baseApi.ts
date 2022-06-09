import { IApi } from '@/types';

export class BaseApi implements IApi {
  protected baseUrl = 'https://jsonplaceholder.typicode.com/';

  // eslint-disable-next-line
  async fetch(url: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${url}`);
    return await response.json();
  }
}