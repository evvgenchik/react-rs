import { useCallback, useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import Loader from '../../components/UI/Loader/Loader';
import useFetching from '../../hooks/useFetch';

function Catalog() {
  const [books, setBooks] = useState<ICard[]>();

  const [fetchApi, loading, errorMessage] = useFetching(async () => {
    const searchParams = localStorage.getItem('search');
    const booksFromServer = searchParams
      ? await BooksServise.getSpecific(searchParams)
      : await BooksServise.getAll();
    if (booksFromServer) setBooks(booksFromServer);
  }) as [() => Promise<void>, boolean, string];

  const fetchData = useCallback(() => {
    return fetchApi;
  }, [fetchApi]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
