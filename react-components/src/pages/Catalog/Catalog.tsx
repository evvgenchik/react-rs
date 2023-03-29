import books from '../../data/books';
import Search from '../../components/Search/Searchh';
import CardList from '../../components/CardList/CardList';

function Catalog() {
  return (
    <>
      <Search />
      <CardList cards={books} />
    </>
  );
}

export default Catalog;
