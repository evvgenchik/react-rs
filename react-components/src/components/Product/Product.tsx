import { IBook, ICard } from '../../utils/types';
import styles from './product.module.scss';

function Product({ book }: { book: ICard }) {
  const iconLink = book.icon.split(':')[1];
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <img src={iconLink} alt="icon book" />
      </div>
      <h2>{book.date}</h2>
      <h3>{book.name}</h3>
      <p>{book.language}</p>
    </li>
  );
}

export default Product;
