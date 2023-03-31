/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import styles from './Radio.module.scss';
import { IInputTextProps, IFormValues } from '../../../utils/types';

const Radio: FC<IInputTextProps> = (props) => {
  const { inputRef, errorMessage, LabelText } = props;
  const name = LabelText?.toLowerCase() as keyof IFormValues;
  const inputs = ['PDF', 'TXT'];

  return (
    <>
      <label className={styles.radio}>
        {LabelText}:
        {inputs.map((item) => (
          <label key={item}>
            {item}
            <input
              key={item}
              {...inputRef(name, {
                required: `${LabelText} is require`,
              })}
              name="format"
              value={item}
              type="radio"
            />
          </label>
        ))}
      </label>
      {errorMessage ? (
        <span>{errorMessage.message}</span>
      ) : (
        <span style={{ visibility: 'hidden' }}>Error:</span>
      )}
    </>
  );
};

export default Radio;
