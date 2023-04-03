import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import BooksServise from '../../API/BooksServise';
import { ICard } from '../../utils/types';
import Loader from '../../components/UI/Loader/Loader';
import useFetching from '../../hooks/useFetch';
import Modal from '../../components/UI/Modal/Modal';

function Catalog() {
  const [books, setBooks] = useState<ICard[]>();
  const [modalActive, setModalActive] = useState<boolean>(false);

  const [fetchApi, loading, errorMessage] = useFetching(async () => {
    const searchParams = localStorage.getItem('search');
    const booksFromServer = searchParams
      ? await BooksServise.getSpecific(searchParams)
      : await BooksServise.getAll();
    if (booksFromServer) setBooks(booksFromServer);
  }) as [() => Promise<void>, boolean, string];

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search setBooks={setBooks} />
      {errorMessage && (
        <h2 style={{ textAlign: 'center' }}>
          Sorry, but something went wrong. <br /> {errorMessage}
        </h2>
      )}
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
