import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styles from './Search.module.scss';
import useSaveLocalUnmount from '../../utils/useSaveLocalUnmount';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';

const Search: FC<{ setBooks: (books: ICard[]) => void }> = ({ setBooks }) => {
  const initialInputValue = localStorage.getItem('search') || '';
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  useSaveLocalUnmount(inputValue);

  const fetchData = async (param: string) => {
    const booksFromServer = await BooksServise.getSpecific(param);
    if (booksFromServer) setBooks(booksFromServer);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue) return;
    fetchData(inputValue);
  };

  const handleChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
  };

  return (
    <form aria-label="form" className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={styles.search}
        placeholder="Search books"
      />
    </form>
  );
};

export default Search;
