/* eslint-disable react/prefer-stateless-function */
import { Component, LegacyRef } from 'react';
import styles from './Checkbox.module.scss';
import { IInputTextProps } from '../../../utils/types';

class Checkbox extends Component<IInputTextProps> {
  render() {
    const { inputRef, errorMessage } = this.props;

    return (
      <div>
        <label className={styles.checkbox} htmlFor="agreement">
          Agree with site rules
          <input ref={inputRef} type="checkbox" name="agreement" />
          {errorMessage && <span>Error: {errorMessage}</span>}
        </label>
      </div>
    );
  }
}

export default Checkbox;
