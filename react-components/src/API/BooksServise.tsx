import { ICard } from '../utils/types';

export default class BooksServise {
  static async getAll() {
    const res = await fetch('http://localhost:3333/boks');
    if (res.status !== 200) throw new Error(`Status code error :${res.status}`);
    const jsonData: ICard[] = await res.json();
    return jsonData;
  }

  static async getSpecific(param: string) {
    try {
      const res = await fetch(`http://localhost:3333/books?q=${param}`);
      const jsonData: ICard[] = await res.json();
      return jsonData;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
