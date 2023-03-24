import { ICard } from '../../utils/types';
import styles from './product.module.scss';

function Product({ book }: { book: ICard }) {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <img src={book.icon} alt="icon book" />
      </div>
      <h2>{book.name}</h2>
      <h3>{book.language}</h3>
      <h4>
        Publication date:
        {book.date}
      </h4>
      <h4>Download permisson: {book.download ? 'Yes' : 'No'}</h4>
    </li>
  );
}

export default Product;
