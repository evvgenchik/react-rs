import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';

function Catalog() {
  const [books, setBooks] = useState<ICard[]>();

  useEffect(() => {
    const searchParams = localStorage.getItem('search');

    const fetchData = async () => {
      const booksFromServer = searchParams
        ? await BooksServise.getSpecific(searchParams)
        : await BooksServise.getAll();

      if (booksFromServer) setBooks(booksFromServer);
    };
    fetchData();
  }, []);

  return (
    <>
      <Search setBooks={setBooks} />
      <CardList cards={books || []} />
    </>
  );
}

export default Catalog;
