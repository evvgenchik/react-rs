import { useState } from 'react';
import { ICard } from '../../utils/types';
import styles from './product.module.scss';
import Modal from '../UI/Modal/Modal';

function Product({ book }: { book: ICard }) {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setModalActive(true)}>
        <li className={styles.item}>
          <div className={styles.icon}>
            <img src={book.icon} alt="icon book" />
          </div>
          <span>{book.date}</span>
          <h2>{book.title}</h2>
        </li>
      </div>
      {modalActive && <Modal card={book} setModalActive={setModalActive} />}
    </>
  );
}

export default Product;

// eslint-disable-next-line no-lone-blocks
{
  /* <p>Format: {book.format}</p>
      <h4>{book.description}</h4> 
  <p>Language: {book.language}</p>;
  */
}
