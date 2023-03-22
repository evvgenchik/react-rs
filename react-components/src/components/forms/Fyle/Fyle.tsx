/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Radio extends Component {
  render() {
    return (
      <label htmlFor="icon">
        Icon:
        <input name="icon" type="file" />
      </label>
    );
  }
}

export default Radio;
