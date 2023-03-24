import { Component, LegacyRef } from 'react';
import styles from './Date.module.scss';

class Date extends Component<{ inputRef: LegacyRef<HTMLInputElement> }> {
  render() {
    const { inputRef } = this.props;

    return (
      <label htmlFor="date">
        Date:
        <input
          ref={inputRef}
          className={styles.input}
          name="date"
          type="date"
        />
      </label>
    );
  }
}

export default Date;
