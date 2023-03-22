/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './Text.module.scss';

class Text extends Component {
  render() {
    return (
      <label htmlFor="name">
        Name:
        <input className={styles.input} id="name" type="text" />
      </label>
    );
  }
}

export default Text;
