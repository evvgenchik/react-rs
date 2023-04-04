import Product from '../Product/Product';
import styles from './CardList.module.scss';
import { ICard } from '../../utils/types';

function CardList({
  cards,
  errorMessage,
}: {
  cards: ICard[];
  errorMessage: string;
}) {
  if (errorMessage) {
    return (
      <h2 className={styles.error}>
        {' '}
        Sorry, but something went wrong. <br /> {errorMessage}
      </h2>
    );
  }
  if (!cards || !cards.length) {
    return <h2 className={styles.error}>Books not found</h2>;
  }

  return (
    <ul className={styles.list}>
      {cards.map((book) => (
        <Product book={book} key={book.isbn13} />
      ))}
    </ul>
  );
}

export default CardList;
