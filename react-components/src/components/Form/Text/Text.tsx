/* eslint-disable react/jsx-props-no-spreading */
import { Component, FC } from 'react';
import { IInputTextProps } from '../../../utils/types';
import styles from './Text.module.scss';

const Text: FC<IInputTextProps> = (props) => {
  const { LabelText, inputRef, errorMessage } = props;

  return (
    <label htmlFor="name">
      {LabelText}:
      <input
        {...inputRef('title', { required: 'Name is require' })}
        className={styles.input}
        id="name"
        name={LabelText?.toLowerCase()}
        type="text"
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
