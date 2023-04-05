import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './Search.module.scss';
import useSaveLocalUnmount from '../../utils/useSaveLocalUnmount';

const Search: FC = () => {
  const initialInputValue = localStorage.getItem('search') || '';
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  useSaveLocalUnmount(inputValue);

  const handleChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue) return;
    localStorage.setItem('search', inputValue);
    setInputValue('');
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
