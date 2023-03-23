/* eslint-disable react/prefer-stateless-function */
import { Component, LegacyRef } from 'react';
import styles from './File.module.scss';

class File extends Component<{ fileRef: LegacyRef<HTMLInputElement> }> {
  ref: LegacyRef<HTMLInputElement>;

  constructor(props: { fileRef: LegacyRef<HTMLInputElement> }) {
    super(props);
    this.ref = props.fileRef;
  }

  render() {
    return (
      <label className={styles.file} htmlFor="icon">
        Сover:
        <input ref={this.ref} name="icon" type="file" title=" " />
      </label>
    );
  }
}

export default File;
