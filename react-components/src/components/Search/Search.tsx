import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './Search.module.scss';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import useFetching from '../../hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addSearchValue } from '../../store';

const Search: FC<{ setBooks: (books: ICard[]) => void }> = ({ setBooks }) => {
  const initialInputValue = useAppSelector((state) => state.search.value) || '';
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  const [fetchApi] = useFetching(async () => {
    const booksFromServer = inputValue
      ? await BooksServise.getSpecific(inputValue)
      : await BooksServise.getAll();
    if (booksFromServer) setBooks(booksFromServer);
  }) as [() => Promise<void>, boolean, string];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetchApi();
    dispatch(addSearchValue(inputValue));
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
