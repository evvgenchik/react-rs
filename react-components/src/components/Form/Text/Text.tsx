import { Component, LegacyRef } from 'react';
import { IInputTextProps } from '../../../utils/types';
import styles from './Text.module.scss';

class Text extends Component<IInputTextProps> {
  render() {
    const { LabelText, inputRef, errorMessage } = this.props;

    return (
      <label htmlFor="name">
        {LabelText}:
        <input
          ref={inputRef}
          className={styles.input}
          id="name"
          name={LabelText?.toLowerCase()}
          type="text"
        />
        {errorMessage ? (
          <span>{errorMessage}</span>
        ) : (
          <span style={{ visibility: 'hidden' }}>Error:</span>
        )}
      </label>
    );
  }
}

export default Text;
