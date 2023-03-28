import { Component } from 'react';
import styles from './File.module.scss';
import { IInputFileProps } from '../../../utils/types';

class File extends Component<IInputFileProps> {
  render() {
    const { fileRef, errorMessage } = this.props;
    return (
      <>
        <label className={styles.file} htmlFor="icon">
          Сover Icon:
          <input
            data-testid="input-file"
            ref={fileRef}
            name="icon"
            type="file"
          />
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

export default File;
