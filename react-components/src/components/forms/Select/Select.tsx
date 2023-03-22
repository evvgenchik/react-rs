/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <label htmlFor="name">
        Language:
        <select name="languages" id="lang">
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
          <option value="java">Java</option>
          <option value="golang">Golang</option>
          <option value="python">Python</option>
          <option value="c#">C#</option>
          <option value="C++">C++</option>
          <option value="erlang">Erlang</option>
        </select>
      </label>
    );
  }
}

export default Select;
