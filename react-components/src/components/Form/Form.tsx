/* eslint-disable react/destructuring-assignment */
import { Component, createRef, FormEvent, LegacyRef } from 'react';
import styles from './form.module.scss';
import Text from './Text/Text';
import Checkbox from './Checkbox/Checkbox';
import Date from './Date/Date';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import File from './File/File';
import Button from './Button/Button';
import { ICard } from '../../utils/types';

class Form extends Component<{ addCard: (cards: ICard) => void }> {
  inputText: LegacyRef<HTMLInputElement>;

  inputDate: LegacyRef<HTMLInputElement>;

  inputRadio: LegacyRef<HTMLInputElement>;

  inputCheckbox: LegacyRef<HTMLInputElement>;

  // inputFile = createRef();

  inputSelect: LegacyRef<HTMLSelectElement>;

  constructor(props: { addCard: (cards: ICard) => void }) {
    super(props);

    this.inputText = createRef<HTMLInputElement>();
    this.inputDate = createRef<HTMLInputElement>();
    this.inputRadio = createRef<HTMLInputElement>();
    this.inputCheckbox = createRef<HTMLInputElement>();
    this.inputSelect = createRef<HTMLSelectElement>();
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const card = {
      name: this.inputText.current.value as string,
      date: this.inputDate.current.value as string,
      category: this.inputRadio.current.value as string,
      consent: this.inputCheckbox.current.value as string,
      language: this.inputSelect.current.value as string,
    };

    this.props.addCard(card);

    // console.log(this.inputText.current.value);
    // console.log(this.inputDate.current.value);
    // console.log(this.inputRadio.current.value);
    // console.log(this.inputCheckbox.current.value);
    // console.log(this.inputSelect.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Text inputRef={this.inputText} />
        <Date inputRef={this.inputDate} />
        <Radio inputRef={this.inputRadio} />
        <Checkbox inputRef={this.inputCheckbox} />
        <Select selectRef={this.inputSelect} />
        <Button addCard={(card: ICard) => this.props.addCard(card)} />
      </form>
    );
  }
}

export default Form;
// eslint-disable-next-line no-lone-blocks
{
  /* <Date ref={this.inputDate} />
        
        <File ref={this.inputFile} />
         */
}
