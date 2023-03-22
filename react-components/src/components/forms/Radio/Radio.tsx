/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './Radio.module.scss';

class Radio extends Component {
  render() {
    return (
      <div className={styles.radio}>
        <span>Gender:</span>
        <div>
          <label htmlFor="male">
            Male
            <input type="radio" id="male" name="gender" />
          </label>
        </div>
        <div>
          <label htmlFor="female">
            Female
            <input type="radio" id="female" name="gender" />
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;
