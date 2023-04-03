import { ICard } from '../utils/types';

export default class BooksServise {
  static async getAll() {
    try {
      const response = await fetch('http://localhost:3333/boks');
      const jsonData: ICard[] = await response.json();
      return jsonData;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  static async getSpecific(param: string) {
    try {
      const response = await fetch(`http://localhost:3333/books?q=${param}`);
      const jsonData: ICard[] = await response.json();
      return jsonData;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
