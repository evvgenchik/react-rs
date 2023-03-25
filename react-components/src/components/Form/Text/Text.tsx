import { Component, LegacyRef } from 'react';
import { IInputTextProps } from '../../../utils/types';
import styles from './Text.module.scss';

class Text extends Component<IInputTextProps> {
  render() {
    const { LabelText, inputRef, errorMessage } = this.props;

    return (
      <label htmlFor="name">
        {LabelText}
        <input ref={inputRef} className={styles.input} id="name" type="text" />
        {errorMessage && <span>Error: {errorMessage}</span>}
      </label>
    );
  }
}

export default Text;
