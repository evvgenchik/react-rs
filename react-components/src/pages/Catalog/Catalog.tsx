import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import Loader from '../../components/UI/Loader/Loader';

function Catalog() {
  const [books, setBooks] = useState<ICard[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchParams = localStorage.getItem('search');

    const fetchData = async () => {
      const booksFromServer = searchParams
        ? await BooksServise.getSpecific(searchParams)
        : await BooksServise.getAll();

      setIsLoading(false);
      if (booksFromServer) setBooks(booksFromServer);
    };
    fetchData();
  }, []);

  return (
    <>
      <Search setBooks={setBooks} />
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 100,
          }}
        >
          <Loader />
        </div>
      ) : (
        <CardList cards={books || []} />
      )}
    </>
  );
}

export default Catalog;
