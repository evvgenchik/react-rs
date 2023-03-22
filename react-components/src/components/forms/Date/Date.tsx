/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Date extends Component {
  render() {
    return (
      <label htmlFor="name">
        Date:
        <input id="date" type="date" />
      </label>
    );
  }
}

export default Date;
