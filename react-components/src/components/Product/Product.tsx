import { ICard } from '../../utils/types';
import styles from './product.module.scss';

function Product({ book }: { book: ICard }) {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <img src={book.icon} alt="icon book" />
      </div>
      <span>{book.date}</span>
      <h2>{book.name}</h2>
      <h4>Language: {book.language}</h4>
      <p>Download permisson: {book.download ? 'Yes' : 'No'}</p>
    </li>
  );
}

export default Product;
