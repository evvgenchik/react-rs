/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './File.module.scss';

class File extends Component {
  render() {
    return (
      <label className={styles.file} htmlFor="icon">
        Сover:
        <input name="icon" type="file" title=" " />
      </label>
    );
  }
}

export default File;
