/* eslint-disable react/prefer-stateless-function */
import { Component, LegacyRef } from 'react';
import styles from './Checkbox.module.scss';

class Checkbox extends Component<{ inputRef: LegacyRef<HTMLInputElement> }> {
  ref: LegacyRef<HTMLInputElement>;

  constructor(props: { inputRef: LegacyRef<HTMLInputElement> }) {
    super(props);
    this.ref = props.inputRef;
  }

  render() {
    return (
      <div>
        <label className={styles.radio} htmlFor="new">
          I consent to use my personal data
          <input ref={this.ref} type="checkbox" id="new" name="state" />
        </label>
      </div>
    );
  }
}

export default Checkbox;
