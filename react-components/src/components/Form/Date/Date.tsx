import { Component, LegacyRef } from 'react';
import styles from './Date.module.scss';
import { IInputTextProps } from '../../../utils/types';

class Date extends Component<IInputTextProps> {
  render() {
    const { inputRef, errorMessage } = this.props;

    return (
      <label htmlFor="date">
        Date:
        <input
          ref={inputRef}
          className={styles.input}
          name="date"
          type="date"
        />
        {errorMessage && <span>Error: {errorMessage}</span>}
      </label>
    );
  }
}

export default Date;
