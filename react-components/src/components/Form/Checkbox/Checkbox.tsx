import { Component, LegacyRef } from 'react';
import styles from './Checkbox.module.scss';
import { IInputTextProps } from '../../../utils/types';

class Checkbox extends Component<IInputTextProps> {
  render() {
    const { inputRef, errorMessage } = this.props;

    return (
      <>
        <label className={styles.checkbox} htmlFor="agreement">
          Agree with site rules
          <input ref={inputRef} type="checkbox" name="agreement" />
        </label>
        {errorMessage ? (
          <span>{errorMessage}</span>
        ) : (
          <span style={{ visibility: 'hidden' }}>Error:</span>
        )}
      </>
    );
  }
}

export default Checkbox;
