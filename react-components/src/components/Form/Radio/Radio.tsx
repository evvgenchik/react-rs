/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import styles from './Radio.module.scss';
import {
  IInputRadioProps,
  IFormValues,
  IValidator,
} from '../../../utils/types';
import validator from '../../../utils/validation';

const Radio: FC<IInputRadioProps> = (props) => {
  const { inputRef, errorMessage, LabelText } = props;
  const name = LabelText?.toLowerCase() as keyof IFormValues;
  const validatorProperty = name as keyof IValidator;
  const inputs = ['PDF', 'TXT'];

  return (
    <>
      <label className={styles.radio}>
        {LabelText}:
        {inputs.map((item, i) => (
          <label key={item}>
            {item}
            <input
              key={item}
              {...inputRef(name, {
                required: `${LabelText} is require`,
              })}
              // ref={(el) => {
              //   if (el && inputRef && inputRef.current) {
              //     inputRef.current[i] = el as HTMLInputElement;
              //   }
              // }}
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
