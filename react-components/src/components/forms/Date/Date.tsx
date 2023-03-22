/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './Date.module.scss';

class Date extends Component {
  render() {
    return (
      <label htmlFor="name">
        Date:
        <input className={styles.input} id="date" type="date" />
      </label>
    );
  }
}

export default Date;
