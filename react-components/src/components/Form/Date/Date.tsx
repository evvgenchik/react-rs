import { Component } from 'react';
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
          data-testid="input-date"
        />
        {errorMessage ? (
          <span>{errorMessage}</span>
        ) : (
          <span style={{ visibility: 'hidden' }}>Error:</span>
        )}
      </label>
    );
  }
}

export default Date;
