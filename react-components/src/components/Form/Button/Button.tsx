import { FormEvent } from 'react';
import styles from './Button.module.scss';

const Button = ({ onSubmit }: { onSubmit: (e: FormEvent) => void }) => {
  return (
    <input
      data-test="formPage-button"
      className={styles.button}
      onSubmit={onSubmit}
      type="submit"
      value="Add"
    />
  );
};

export default Button;
