import Product from '../Product/Product';
import styles from './CardList.module.scss';
import { ICard } from '../../utils/types';

function CardList({ cards }: { cards: ICard[] }) {
  return (
    <ul className={styles.list}>
      {cards.map((book, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Product book={book} key={index} />
      ))}
    </ul>
  );
}

export default CardList;
