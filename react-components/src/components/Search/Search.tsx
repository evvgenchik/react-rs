import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './Search.module.scss';
import useSaveLocalUnmount from '../../hooks/useSaveLocalUnmount';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import useFetching from '../../hooks/useFetch';

const Search: FC<{ setBooks: (books: ICard[]) => void }> = ({ setBooks }) => {
  const initialInputValue = localStorage.getItem('search') || '';
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  const [fetchApi] = useFetching(async () => {
    const booksFromServer = inputValue
      ? await BooksServise.getSpecific(inputValue)
      : await BooksServise.getAll();
    if (booksFromServer) setBooks(booksFromServer);
  }) as [() => Promise<void>, boolean, string];

  useSaveLocalUnmount(inputValue);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetchApi();
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
