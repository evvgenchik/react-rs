/* eslint-disable react/destructuring-assignment */
import { Component, createRef, FormEvent, LegacyRef } from 'react';
import styles from './form.module.scss';
import Text from './Text/Text';
// import Checkbox from './Checkbox/Checkbox';
import Date from './Date/Date';
// import Radio from './Radio/Radio';
// import Select from './Select/Select';
// import File from './File/File';
import Button from './Button/Button';
import { ICard } from '../../utils/types';

class Form extends Component<{ addCard: (cards: ICard) => void }> {
  inputText: LegacyRef<HTMLInputElement>;

  inputDate: LegacyRef<HTMLInputElement>;

  // inputRadio = createRef();

  // inputCheckbox = createRef();

  // inputFile = createRef();

  // inputSelect = createRef();

  constructor(props: { addCard: (cards: ICard) => void }) {
    super(props);

    this.inputText = createRef<HTMLInputElement>();
    this.inputDate = createRef<HTMLInputElement>();
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('df');
    // console.log(this.inputText.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Text inputRef={this.inputText} />
        <Date dateRef={this.inputDate} />
        {/* <Button addCard={this.props.addCard} /> */}
      </form>
    );
  }
}

export default Form;
// eslint-disable-next-line no-lone-blocks
{
  /* <Date ref={this.inputDate} />
        <Radio ref={this.inputRadio} />
        <Checkbox ref={this.inputCheckbox} />
        <File ref={this.inputFile} />
        <Select ref={this.inputSelect} /> */
}
