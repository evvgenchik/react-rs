import { Component, LegacyRef } from 'react';
import { IInputTextProps } from '../../../utils/types';
import styles from './Text.module.scss';

class Text extends Component<IInputTextProps> {
  render() {
    const { LabelText, inputRef } = this.props;

    return (
      <label htmlFor="name">
        {LabelText}
        <input ref={inputRef} className={styles.input} id="name" type="text" />
      </label>
    );
  }
}

export default Text;
