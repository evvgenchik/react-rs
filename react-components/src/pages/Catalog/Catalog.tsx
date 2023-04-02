import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';

function Catalog() {
  const [books, setBooks] = useState<ICard[]>();

  useEffect(() => {
    const fetchData = async () => {
      const booksFromServer = await BooksServise.getAll();
      setBooks(booksFromServer);
    };
    fetchData();
  }, []);

  return (
    <>
      <Search />
      <CardList cards={books || []} />
    </>
  );
}

export default Catalog;
