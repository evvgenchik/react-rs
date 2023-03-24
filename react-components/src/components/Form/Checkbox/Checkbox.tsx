/* eslint-disable react/prefer-stateless-function */
import { Component, LegacyRef } from 'react';
import styles from './Checkbox.module.scss';

class Checkbox extends Component<{ inputRef: LegacyRef<HTMLInputElement> }> {
  render() {
    const { inputRef } = this.props;

    return (
      <div>
        <label className={styles.checkbox} htmlFor="consent">
          Agree with site rules
          <input ref={inputRef} type="checkbox" name="consent" />
        </label>
      </div>
    );
  }
}

export default Checkbox;
