import books from '../data/books';
import Product from './Product';
import styles from './catalog.module.scss';

function Catalog() {
  return (
    <>
      <h1 className={styles.title}>Catalog of IT books</h1>
      <ul className={styles.list}>
        {books.map((book) => (
          <Product book={book} key={book.isbn13} />
        ))}
      </ul>
    </>
  );
}

export default Catalog;
