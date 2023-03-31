/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import styles from './Select.module.scss';
import { IInputTextProps, IFormValues } from '../../../utils/types';

const Select: FC<IInputTextProps> = (props) => {
  const { LabelText, inputRef, errorMessage } = props;
  const name = LabelText?.toLowerCase() as keyof IFormValues;

  return (
    <label className={styles.select} htmlFor={name}>
      {LabelText}:
      <select
        {...inputRef(name, {
          required: `${LabelText} is require`,
        })}
        name={name}
        id={name}
      >
        <option value="JavaScript">JavaScript</option>
        <option value="PHP">PHP</option>
        <option value="Java">Java</option>
        <option value="Golang">Golang</option>
        <option value="Python">Python</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
        <option value="Erlang">Erlang</option>
      </select>
      {errorMessage ? (
        <span>{errorMessage.message}</span>
      ) : (
        <span style={{ visibility: 'hidden' }}>Error:</span>
      )}
    </label>
  );
};

export default Select;
