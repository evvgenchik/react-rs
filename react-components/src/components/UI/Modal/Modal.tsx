import { FC } from 'react';
import styles from './Modal.module.scss';
import filterKeyEnter from '../../../utils/helpers';

const Modal: FC<{
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  children?: JSX.Element[];
}> = ({ setModalActive, active, children }) => {
  return (
    <div
      role="link"
      onKeyDown={filterKeyEnter(() => setModalActive(true))}
      tabIndex={0}
      onClick={() => setModalActive(false)}
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
    >
      <div
        role="link"
        onKeyDown={filterKeyEnter(() => setModalActive(true))}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
      >
        {children && children.map((el) => el)}
      </div>
    </div>
  );
};

export default Modal;
