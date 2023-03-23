import books from '../../data/books';
import Product from '../Product/Product';
import styles from './CardList.module.scss';

function CardList() {
  return (
    <ul className={styles.list}>
      {books.map((book) => (
        <Product book={book} key={book.isbn13} />
      ))}
    </ul>
  );
}

export default CardList;
