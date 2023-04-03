import Product from '../Product/Product';
import styles from './CardList.module.scss';
import { ICard } from '../../utils/types';

function CardList({ cards }: { cards: ICard[] }) {
  if (!cards || !cards.length) {
    return <h2 className={styles.error}>Books not found</h2>;
  }

  return (
    <ul className={styles.list}>
      {cards.length &&
        cards.map((book) => <Product book={book} key={book.isbn13} />)}
    </ul>
  );
}

export default CardList;
