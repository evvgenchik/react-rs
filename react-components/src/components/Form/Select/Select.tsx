import { Component } from 'react';
import styles from './Select.module.scss';
import { IInputSelectProps } from '../../../utils/types';

class Select extends Component<IInputSelectProps> {
  render() {
    const { selectRef, errorMessage } = this.props;

    return (
      <>
        <label className={styles.select} htmlFor="name">
          Language:
          <select ref={selectRef} name="language" id="lang">
            <option value="JavaScript">JavaScript</option>
            <option value="PHP">PHP</option>
            <option value="Java">Java</option>
            <option value="Golang">Golang</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
            <option value="C++">C++</option>
            <option value="Erlang">Erlang</option>
          </select>
          {errorMessage ? (
            <span>{errorMessage}</span>
          ) : (
            <span style={{ visibility: 'hidden' }}>Error:</span>
          )}
        </label>
        {errorMessage ? (
          <span>{errorMessage}</span>
        ) : (
          <span style={{ visibility: 'hidden' }}>Error:</span>
        )}
      </>
    );
  }
}

export default Select;
