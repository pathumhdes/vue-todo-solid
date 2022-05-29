export class Api {
    private baseUrl = 'https://jsonplaceholder.typicode.com/';

    constructor(private url: string) {}

    async fetch() {
      const response = await fetch(`${this.baseUrl}${this.url}`)
      return await response.json()
    }
  }