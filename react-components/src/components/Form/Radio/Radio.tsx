import { Component, MutableRefObject } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Radio.module.scss';

class Radio extends Component<{
  inputRef: MutableRefObject<HTMLInputElement[] | null>;
}> {
  inputs = ['PDF', 'TXT'];

  render() {
    const { inputRef } = this.props as {
      inputRef: MutableRefObject<HTMLInputElement[]>;
    };

    inputRef.current = [];

    return (
      <label className={styles.radio}>
        Format:
        {this.inputs.map((item, i) => (
          <label key={uuidv4()}>
            {item}
            <input
              key={uuidv4()}
              ref={(el) => {
                console.log(el);
                inputRef.current[i] = el as HTMLInputElement;
              }}
              name="format"
              value={item}
              type="radio"
            />
          </label>
        ))}
        {/* <label>
          PDF
          <input ref={inputRef} name="download" value="PDF" type="radio" />
        </label>
        <label>
          TXT
          <input ref={inputRef} name="download" value="TXT" type="radio" />
        </label> */}
      </label>
    );
  }
}

export default Radio;

// <div className={styles.radio}>
//   <span>Download Permission</span>
//   <label className={styles.switch}>
//     <input ref={inputRef} name="download" type="radio" />
//     <span className={styles.slider} />
//   </label>
// </div>;
