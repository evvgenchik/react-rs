/* eslint-disable react/prefer-stateless-function */
import { Component, LegacyRef } from 'react';
import styles from './Date.module.scss';

class Date extends Component<{ inputRef: LegacyRef<HTMLInputElement> }> {
  ref: LegacyRef<HTMLInputElement>;

  constructor(props: { inputRef: LegacyRef<HTMLInputElement> }) {
    super(props);
    this.ref = props.inputRef;
  }

  render() {
    return (
      <label htmlFor="name">
        Date:
        <input ref={this.ref} className={styles.input} id="date" type="date" />
      </label>
    );
  }
}

export default Date;
