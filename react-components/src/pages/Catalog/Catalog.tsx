import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import Loader from '../../components/UI/Loader/Loader';
import useFetching from '../../hooks/useFetch';

function Catalog() {
  const [books, setBooks] = useState<ICard[]>();
  const [isLoading, setIsLoading] = useState(true);

  const [fetchApi, loading, errorMessage] = useFetching(async () => {
    const searchParams = localStorage.getItem('search');

    const booksFromServer = searchParams
      ? await BooksServise.getSpecific(searchParams)
      : await BooksServise.getAll();

    if (booksFromServer) setBooks(booksFromServer);
  }) as [() => Promise<void>, boolean, string];

  useEffect(() => {
    fetchApi();
    console.log(errorMessage);

    // const searchParams = localStorage.getItem('search');

    // const fetchData = async () => {
    //   const booksFromServer = searchParams
    //     ? await BooksServise.getSpecific(searchParams)
    //     : await BooksServise.getAll();

    //   setIsLoading(false);
    //   if (booksFromServer) setBooks(booksFromServer);
    // };
    // fetchData();
  }, []);

  return (
    <>
      <Search setBooks={setBooks} />
      {errorMessage && <h2>Sorry, but something went wrong</h2>}
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
        <CardList cards={books || []} />
      )}
    </>
  );
}

export default Catalog;
