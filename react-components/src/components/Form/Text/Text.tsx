/* eslint-disable react/prefer-stateless-function */
import { Component, LegacyRef } from 'react';
import styles from './Text.module.scss';
import { ICard } from '../../../utils/types';

class Text extends Component<{ inputRef: LegacyRef<HTMLInputElement> }> {
  ref: LegacyRef<HTMLInputElement>;

  constructor(props: { inputRef: LegacyRef<HTMLInputElement> }) {
    super(props);
    this.ref = props.inputRef;
  }

  render() {
    return (
      <label htmlFor="name">
        Name:
        <input ref={this.ref} className={styles.input} id="name" type="text" />
      </label>
    );
  }
}

export default Text;
