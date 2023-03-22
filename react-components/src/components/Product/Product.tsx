import { IBook } from '../../utils/types';
import styles from './product.module.scss';

function Product({ book }: { book: IBook }) {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <img src={book.image} alt="icon book" />
      </div>
      <h2>{book.price}</h2>
      <h3>{book.title}</h3>
      <p>{book.subtitle}</p>
    </li>
  );
}

export default Product;
