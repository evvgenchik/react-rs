/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component, LegacyRef } from 'react';
import styles from './Radio.module.scss';

class Radio extends Component<{ inputRef: LegacyRef<HTMLInputElement> }> {
  ref: LegacyRef<HTMLInputElement>;

  constructor(props: { inputRef: LegacyRef<HTMLInputElement> }) {
    super(props);
    this.ref = props.inputRef;
  }

  render() {
    return (
      <div className={styles.radio}>
        <span>Download Permission</span>
        <label className={styles.switch}>
          <input ref={this.ref} name="author" type="radio" />
          <span className={styles.slider} />
        </label>
      </div>
    );
  }
}

export default Radio;
