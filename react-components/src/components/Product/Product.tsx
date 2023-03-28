import { ICard } from '../../utils/types';
import styles from './product.module.scss';

function Product({ book }: { book: ICard }) {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <img src={book.icon} alt="icon book" />
      </div>
      <span>{book.date}</span>
      <h2>{book.title}</h2>
      <h4>{book.description}</h4>
      <p>Language: {book.language}</p>
      <p>Format: {book.format}</p>
    </li>
  );
}

export default Product;
