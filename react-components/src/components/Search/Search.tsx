import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './Search.module.scss';
import {
  useGetAllBooksQuery,
  useLazyGetSpecificBookQuery,
} from '../../API/BooksServise';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addSearchValue } from '../../store';

const Search: FC = () => {
  const initialInputValue = useAppSelector((state) => state.search.value) || '';
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(initialInputValue);
  useGetAllBooksQuery(inputValue);

  const [searchSpecificBook] = useLazyGetSpecificBookQuery();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await searchSpecificBook(inputValue);
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
