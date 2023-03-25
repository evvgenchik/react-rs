import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Radio.module.scss';
import { IInputRadioProps } from '../../../utils/types';

class Radio extends Component<IInputRadioProps> {
  inputs = ['PDF', 'TXT'];

  render() {
    const { inputRef, errorMessage } = this.props;

    return (
      <label className={styles.radio}>
        Format:
        {this.inputs.map((item, i) => (
          <label key={uuidv4()}>
            {item}
            <input
              key={uuidv4()}
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
    );
  }
}

export default Radio;
