import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import { useGetAllBooksQuery } from '../../API/BooksServise';
import Loader from '../../components/UI/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';

function Catalog() {
  const searchParams = useAppSelector((state) => state.search.value) || '';
  const { data: books, isLoading, isError } = useGetAllBooksQuery(searchParams);

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
