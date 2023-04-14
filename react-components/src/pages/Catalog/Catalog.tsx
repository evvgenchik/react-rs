import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise, { useGetAllBooksQuery } from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import Loader from '../../components/UI/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';

function Catalog() {
  // const [books, setBooks] = useState<ICard[]>();
  const [loading, setloading] = useState<boolean>();
  const [errorMessage, setError] = useState<string>('');
  const searchParams = useAppSelector((state) => state.search.value);
  const { data: books, isLoading, isError } = useGetAllBooksQuery();

  // const fethcData = async () => {
  //   const booksFromServer = searchParams
  //     ? await BooksServise.getSpecific(searchParams)
  //     : await BooksServise.getAll();
  //   if (booksFromServer) setBooks(booksFromServer);
  // };

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       setloading(true);
  //       setError('');
  //       await fethcData();
  //     } catch (error) {
  //       const errorMess = error as Error;
  //       setError(errorMess.message);
  //     } finally {
  //       setloading(false);
  //     }
  //   };
  //   fetchApi();
  // }, []);

  return (
    <>
      <Search />
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
        <CardList isError={isError} cards={books || []} />
      )}
    </>
  );
}

export default Catalog;
