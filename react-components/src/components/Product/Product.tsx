import { ICard } from '../../utils/types';
import styles from './product.module.scss';
import filterKeyEnter from '../../utils/helpers';

function Product({
  book,
  cardClickHandler,
}: {
  book: ICard;
  cardClickHandler: (isbn13: string) => void;
}) {
  return (
    <div
      role="link"
      onClick={() => cardClickHandler(book.isbn13)}
      onKeyDown={filterKeyEnter(() => cardClickHandler(book.isbn13))}
      tabIndex={0}
    >
      <li data-testid="cardlist-item" className={styles.item}>
        <div className={styles.icon}>
          <img src={book.icon} alt="icon book" />
        </div>
        <span>{book.date}</span>
        <h2 data-testid="item-titile">{book.title}</h2>
      </li>
    </div>
  );
}

export default Product;
