/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import styles from './File.module.scss';
import { IInputTextProps, IFormValues, IValidator } from '../../../utils/types';
import validator from '../../../utils/validation';

const File: FC<IInputTextProps> = (props) => {
  const { LabelText, inputRef, errorMessage, type } = props;
  const name = LabelText?.toLowerCase() as keyof IFormValues;
  const validatorProperty = name as keyof IValidator;

  return (
    <>
      <label className={styles.file} htmlFor="icon">
        {LabelText}:
        <input
          data-testid="input-file"
          {...inputRef(name, {
            required: `${LabelText} is require`,
            validate: validator[validatorProperty],
          })}
          name={name}
          type="file"
        />
      </label>
      {errorMessage ? (
        <span>{errorMessage.message}</span>
      ) : (
        <span style={{ visibility: 'hidden' }}>Error:</span>
      )}
    </>
  );
};

export default File;
