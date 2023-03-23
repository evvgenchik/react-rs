/* eslint-disable react/destructuring-assignment */
import { Component, createRef, FormEvent, RefObject } from 'react';
import styles from './form.module.scss';
import Text from './Text/Text';
import Checkbox from './Checkbox/Checkbox';
import Date from './Date/Date';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import File from './File/File';
import Button from './Button/Button';
import { ICard } from '../../utils/types';
import getFile from '../../utils/helper';

class Form extends Component<{ addCard: (cards: ICard) => void }> {
  inputText: RefObject<HTMLInputElement>;

  inputDate: RefObject<HTMLInputElement>;

  inputRadio: RefObject<HTMLInputElement>;

  inputCheckbox: RefObject<HTMLInputElement>;

  inputFile: RefObject<HTMLInputElement>;

  inputSelect: RefObject<HTMLSelectElement>;

  constructor(props: { addCard: (cards: ICard) => void }) {
    super(props);

    this.inputText = createRef<HTMLInputElement>();
    this.inputDate = createRef<HTMLInputElement>();
    this.inputRadio = createRef<HTMLInputElement>();
    this.inputCheckbox = createRef<HTMLInputElement>();
    this.inputSelect = createRef<HTMLSelectElement>();
    this.inputFile = createRef<HTMLInputElement>();
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const card = {
      name: this.inputText?.current?.value as string,
      date: this.inputDate?.current?.value as string,
      author: this.inputRadio?.current?.checked as boolean,
      consent: this.inputRadio?.current?.checked as boolean,
      language: this.inputSelect?.current?.value as string,
      icon: getFile(this.inputFile),
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
