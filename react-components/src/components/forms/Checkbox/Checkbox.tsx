/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './Checkbox.module.scss';

class Checkbox extends Component {
  render() {
    return (
      <div className={styles.checkbox}>
        <span>Role: </span>
        <label htmlFor="male">
          Author
          <input type="radio" name="author" value="male" />
        </label>
        <label htmlFor="female">
          Customer
          <input type="radio" name="customer" value="female" />
        </label>
      </div>
    );
  }
}

export default Checkbox;
