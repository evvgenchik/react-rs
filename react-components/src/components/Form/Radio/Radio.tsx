import { Component } from 'react';
import styles from './Radio.module.scss';
import { IInputRadioProps } from '../../../utils/types';

class Radio extends Component<IInputRadioProps> {
  inputs = ['PDF', 'TXT'];

  render() {
    const { inputRef, errorMessage } = this.props;
    inputRef.current = [];

    return (
      <>
        <label className={styles.radio}>
          Format:
          {this.inputs.map((item, i) => (
            <label key={item}>
              {item}
              <input
                key={item}
                ref={(el) => {
                  if (el && inputRef && inputRef.current) {
                    inputRef.current[i] = el as HTMLInputElement;
                  }
                }}
                name="format"
                value={item}
                type="radio"
              />
            </label>
          ))}
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

export default Radio;
