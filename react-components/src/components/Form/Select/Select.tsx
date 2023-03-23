import { Component, LegacyRef } from 'react';
import styles from './Select.module.scss';

class Select extends Component<{ selectRef: LegacyRef<HTMLSelectElement> }> {
  ref: LegacyRef<HTMLSelectElement>;

  constructor(props: { selectRef: LegacyRef<HTMLSelectElement> }) {
    super(props);
    this.ref = props.selectRef;
  }

  render() {
    return (
      <label className={styles.select} htmlFor="name">
        Language:
        <select ref={this.ref} name="language" id="lang">
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
