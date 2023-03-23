/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './Checkbox.module.scss';

class Checkbox extends Component {
  render() {
    return (
      <div className={styles.checkbox}>
        <span>Category: </span>
        <label htmlFor="programming">
          Programming
          <input type="radio" name="programming" value="programming" />
        </label>
        <label htmlFor="other">
          Other
          <input type="radio" name="other" value="other" />
        </label>
      </div>
    );
  }
}

export default Checkbox;
