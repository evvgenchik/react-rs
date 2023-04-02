import { ICard } from '../utils/types';

export default class BooksServise {
  static async getAll() {
    const response = await fetch('http://localhost:3333/books');
    const jsonData: ICard[] = await response.json();
    return jsonData;
  }
}
