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

  inputFile: LegacyRef<HTMLInputElement>;

  inputSelect: LegacyRef<HTMLSelectElement>;

  constructor(props: { addCard: (cards: ICard) => void }) {
    super(props);

    this.inputText = createRef<HTMLInputElement>();
    this.inputDate = createRef<HTMLInputElement>();
    this.inputRadio = createRef<HTMLInputElement>();
    this.inputCheckbox = createRef<HTMLInputElement>();
    this.inputSelect = createRef<HTMLSelectElement>();
    this.inputFile = createRef<HTMLInputElement>();
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(URL.createObjectURL(this.inputFile.current?.files?.[0]));

    const card = {
      // name: this.inputText.current.value as string,
      // date: this.inputDate.current.value as string,
      // category: this.inputRadio.current.checked as string,
      // consent: this.inputCheckbox.current.checked as string,
      // language: this.inputSelect.current.value as string,
      icon: this.inputFile?.current?.value as string,
    };

    this.props.addCard(card);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Text inputRef={this.inputText} />
        <Date inputRef={this.inputDate} />
        <Radio inputRef={this.inputRadio} />
        <Checkbox inputRef={this.inputCheckbox} />
        <Select selectRef={this.inputSelect} />
        <File fileRef={this.inputFile} />
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
