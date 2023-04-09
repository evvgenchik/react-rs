import { ICard } from '../utils/types';

export default class BooksServise {
  static async getAll() {
    const res = await fetch(
      'https://json-server-production-2471.up.railway.app/books'
    );
    if (res.status !== 200) throw new Error(`Status code error: ${res.status}`);
    const jsonData: ICard[] = await res.json();
    return jsonData;
  }

  static async getSpecific(param: string) {
    const res = await fetch(
      `https://json-server-production-2471.up.railway.app/books?q=${param}`
    );
    if (res.status !== 200) throw new Error(`Status code error: ${res.status}`);
    const jsonData: ICard[] = await res.json();
    return jsonData;
  }
}
