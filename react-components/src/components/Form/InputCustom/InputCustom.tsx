import { FC } from 'react';
import { IInputTextProps, IFormValues, IValidator } from '../../../utils/types';
import styles from './InputCustom.module.scss';
import validator from '../../../utils/validation';

const Text: FC<IInputTextProps> = (props) => {
  const { LabelText, inputRef, errorMessage, type, testID } = props;
  const name = LabelText?.toLowerCase() as keyof IFormValues;
  const validatorProperty = name as keyof IValidator;

  return (
    <label htmlFor={name} className={styles[name]}>
      {LabelText}:
      <input
        {...inputRef(name, {
          required: `${LabelText} is require`,
          validate: validator[validatorProperty],
        })}
        className={styles.input}
        id={name}
        name={name}
        type={type}
        data-test={testID}
      />
      {errorMessage ? (
        <span>{errorMessage.message}</span>
      ) : (
        <span style={{ visibility: 'hidden' }}>Error:</span>
      )}
    </label>
  );
};

export default Text;
