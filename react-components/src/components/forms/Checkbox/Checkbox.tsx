/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Roke: </p>
          <label htmlFor="male">
            Author
            <input type="radio" name="author" value="male" />
          </label>
          <label htmlFor="female">
            Customer
            <input type="radio" name="customer" value="female" />
          </label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
