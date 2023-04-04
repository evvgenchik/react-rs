import { FC } from 'react';
import { ICard } from '../../../utils/types';
import styles from './Modal.module.scss';
import filterKeyEnter from '../../../utils/helpers';

const Modal: FC<{
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  card: ICard;
}> = ({ setModalActive, card }) => {
  return (
    <div
      role="link"
      onKeyDown={filterKeyEnter(() => setModalActive(true))}
      tabIndex={0}
      onClick={() => setModalActive(false)}
      className={styles.modal}
    >
      <div
        role="link"
        onKeyDown={filterKeyEnter(() => setModalActive(true))}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        className={styles.content}
      >
        <div className={styles.icon}>
          <img src={card.icon} alt="icon book" />
        </div>
        <span>{card.date}</span>
        <h2>{card.title}</h2>
        <h4>{card.description}</h4>
        <p>Language: {card.language}</p>
        <p>Format: {card.format}</p>
        <button
          type="button"
          onClick={() => setModalActive(false)}
          className={styles.cross}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
