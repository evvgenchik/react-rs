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
          <option value="JavaScript">JavaScript</option>
          <option value="PHP">PHP</option>
          <option value="Java">Java</option>
          <option value="Golang">Golang</option>
          <option value="Python">Python</option>
          <option value="C#">C#</option>
          <option value="C++">C++</option>
          <option value="Erlang">Erlang</option>
        </select>
      </label>
    );
  }
}

export default Select;
