import { FC } from 'react';
import { IModalBook } from '../../utils/types';
import Modal from '../UI/Modal/Modal';
import styles from './ModalBook.module.scss';
import { useGetSpecificBookQuery } from '../../API/BooksServise';

const ModalBook: FC<IModalBook> = ({ id, active, setModalActive }) => {
  const { data: bookArr } = useGetSpecificBookQuery(id);
  const book = bookArr ? bookArr[0] : null;

  return (
    <div>
      {book ? (
        <Modal setModalActive={setModalActive} active={active}>
          <div className={styles.modalIcon}>
            <img src={book.icon} alt="icon boo k" />
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
      ) : (
        <Modal setModalActive={setModalActive} active={active} />
      )}
    </div>
  );
};

export default ModalBook;
