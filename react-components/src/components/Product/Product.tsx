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
      {modalActive && <Modal card={book} setModalActive={setModalActive} />}
    </>
  );
}

export default Product;
