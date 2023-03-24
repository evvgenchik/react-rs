import { IBook, ICard } from '../../utils/types';
import styles from './product.module.scss';

function Product({ book }: { book: ICard }) {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <img src={book.icon} alt="icon book" />
      </div>
      <h2>{book.name}</h2>
      <h3>{book.date}</h3>
      <p>{book.language}</p>
    </li>
  );
}

export default Product;
