import { v4 as uuidv4 } from 'uuid';
import Product from '../Product/Product';
import styles from './CardList.module.scss';
import { ICard } from '../../utils/types';

function CardList({ cards }: { cards: ICard[] }) {
  return (
    <ul className={styles.list}>
      {cards.map((book) => (
        <Product book={book} key={uuidv4()} />
      ))}
    </ul>
  );
}

export default CardList;
