/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Radio extends Component {
  render() {
    return (
      <div>
        <p>Gender:</p>
        <div>
          <label htmlFor="name">
            Male
            <input type="checkbox" id="scales" name="scales" />
          </label>
        </div>
        <div>
          <label htmlFor="name">
            Female
            <input type="checkbox" id="horns" name="horns" />
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;
