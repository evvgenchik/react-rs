import { Component, LegacyRef } from 'react';
import styles from './Radio.module.scss';

class Radio extends Component<{ inputRef: LegacyRef<HTMLInputElement> }> {
  render() {
    const { inputRef } = this.props;

    return (
      <div className={styles.radio}>
        <span>Download Permission</span>
        <label className={styles.switch}>
          <input ref={inputRef} name="author" type="radio" />
          <span className={styles.slider} />
        </label>
      </div>
    );
  }
}

export default Radio;
