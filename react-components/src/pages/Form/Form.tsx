/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './form.module.scss';
import Text from '../../components/forms/Text/Text';
import Checkbox from '../../components/forms/Checkbox/Checkbox';
import Date from '../../components/forms/Date/Date';
import Radio from '../../components/forms/Radio/Radio';
import Select from '../../components/forms/Select/Select';
import File from '../../components/forms/File/File';
import Button from '../../components/forms/Button/Button';

class Form extends Component {
  render() {
    return (
      <form className={styles.form}>
        <Text />
        <Date />
        <Radio />
        <Checkbox />
        <File />
        <Select />
        <Button />
      </form>
    );
  }
}

export default Form;
