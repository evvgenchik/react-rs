import booksJson from '../../data/booksDB.json';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';

function Catalog() {
  return (
    <>
      <Search />
      <CardList cards={booksJson.books} />
    </>
  );
}

export default Catalog;
