/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './Radio.module.scss';

class Radio extends Component {
  render() {
    return (
      <div className={styles.radio}>
        <span>State:</span>
        <div>
          <label htmlFor="new">
            New
            <input type="radio" id="new" name="state" />
          </label>
        </div>
        <div>
          <label htmlFor="user">
            Used
            <input type="radio" id="user" name="state" />
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;
