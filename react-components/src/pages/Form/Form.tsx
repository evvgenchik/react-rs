/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import styles from './form.module.scss';
import Text from '../../components/forms/Text/Text';
import Checkbox from '../../components/forms/Checkbox/Checkbox';
import Date from '../../components/forms/Date/Date';
import Radio from '../../components/forms/Radio/Radio';
import Select from '../../components/forms/Select/Select';
import Fyle from '../../components/forms/Fyle/Fyle';
import Button from '../../components/forms/Button/Button';

class Form extends Component {
  render() {
    return (
      <form className={styles.form}>
        <Text />
        <Date />
        <Checkbox />
        <Radio />
        <Select />
        <Fyle />
        <Button />
      </form>
    );
  }
}

export default Form;
