/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import styles from './Date.module.scss';
import { IFormValues, IInputTextProps, IValidator } from '../../../utils/types';
import validator from '../../../utils/validation';

const Date: FC<IInputTextProps> = (props) => {
  const { LabelText, inputRef, errorMessage } = props;
  const name = LabelText?.toLowerCase() as keyof IFormValues;
  const validatorProperty = name as keyof IValidator;

  return (
    <label htmlFor="date">
      Date:
      <input
        {...inputRef(name, {
          required: `${LabelText} is require`,
          validate: validator[validatorProperty],
        })}
        className={styles.input}
        id={name}
        name={name}
        type="date"
        data-testid="input-date"
      />
      {errorMessage ? (
        <span>{errorMessage.message}</span>
      ) : (
        <span style={{ visibility: 'hidden' }}>Error:</span>
      )}
    </label>
  );
};

export default Date;
