import { useState } from 'react';
import { ICard } from '../../utils/types';
import styles from './product.module.scss';
import Modal from '../UI/Modal/Modal';
import filterKeyEnter from '../../utils/helpers';

function Product({ book }: { book: ICard }) {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <>
      <div
        role="link"
        onClick={() => setModalActive(true)}
        onKeyDown={filterKeyEnter(() => setModalActive(true))}
        tabIndex={0}
      >
        <li className={styles.item}>
          <div className={styles.icon}>
            <img src={book.icon} alt="icon book" />
          </div>
          <span>{book.date}</span>
          <h2>{book.title}</h2>
        </li>
      </div>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className={styles.modalIcon}>
          <img src={book.icon} alt="icon book" />
        </div>
        <span className={styles.modalData}>{book.date}</span>
        <h2>{book.title}</h2>
        <h4>{book.description}</h4>
        <p>Language: {book.language}</p>
        <p>Format: {book.format}</p>
        <button
          type="button"
          onClick={() => setModalActive(false)}
          className={styles.modalCross}
        >
          X
        </button>
      </Modal>
    </>
  );
}

export default Product;
