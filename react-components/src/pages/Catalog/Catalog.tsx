import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import Loader from '../../components/UI/Loader/Loader';

function Catalog() {
  const [books, setBooks] = useState<ICard[]>();
  const [loading, setloading] = useState<boolean>();
  const [errorMessage, setError] = useState<string>('');

  const fethcData = async () => {
    const searchParams = localStorage.getItem('search');
    const booksFromServer = searchParams
      ? await BooksServise.getSpecific(searchParams)
      : await BooksServise.getAll();
    if (booksFromServer) setBooks(booksFromServer);
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setloading(true);
        setError('');
        await fethcData();
      } catch (error) {
        const errorMess = error as Error;
        setError(errorMess.message);
      } finally {
        setloading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <Search setBooks={setBooks} />
      {loading ? (
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
        <CardList errorMessage={errorMessage} cards={books || []} />
      )}
    </>
  );
}

export default Catalog;
