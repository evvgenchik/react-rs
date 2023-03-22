import books from '../../data/books';
import Product from '../../components/Product/Product';
import Search from '../../components/Search/Search';
import styles from './catalog.module.scss';

function Catalog() {
  return (
    <>
      <Search />
      <ul className={styles.list}>
        {books.map((book) => (
          <Product book={book} key={book.isbn13} />
        ))}
      </ul>
    </>
  );
}

export default Catalog;
