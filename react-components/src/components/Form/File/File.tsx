import { Component, LegacyRef } from 'react';
import styles from './File.module.scss';

class File extends Component<{ fileRef: LegacyRef<HTMLInputElement> }> {
  render() {
    const { fileRef } = this.props;

    return (
      <label className={styles.file} htmlFor="icon">
        Сover Icon:
        <input ref={fileRef} name="icon" type="file" title=" " />
      </label>
    );
  }
}

export default File;
