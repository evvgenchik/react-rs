import {
  Component,
  createRef,
  FormEvent,
  RefObject,
  MutableRefObject,
} from 'react';
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
  inputText: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

  inputDescription: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

  inputDate: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

  inputRadio: MutableRefObject<HTMLInputElement[] | null> = createRef<
    HTMLInputElement[] | null
  >();

  inputCheckbox: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

  inputFile: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

  inputSelect: RefObject<HTMLSelectElement> = createRef<HTMLSelectElement>();

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const findCheckedRadio = this.inputRadio?.current.find((el) => el.checked);
    const card: ICard = {
      name: this.inputText?.current?.value as string,
      description: this.inputText?.current?.value as string,
      date: this.inputDate?.current?.value as string,
      format: getChecked(this.inputRadio?.current),
      agreement: this.inputCheckbox?.current?.checked as boolean,
      language: this.inputSelect?.current?.value as string,
      icon: getFile(this.inputFile),
    };

    const { addCard } = this.props;
    addCard(card);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Text inputRef={this.inputText} LabelText="Name book:" />
        <Text inputRef={this.inputDescription} LabelText="Description:" />
        <Date inputRef={this.inputDate} />
        <Radio inputRef={this.inputRadio} />
        <Select selectRef={this.inputSelect} />
        <File fileRef={this.inputFile} />
        <Checkbox inputRef={this.inputCheckbox} />
        <Button handleSubmit={this.handleSubmit} />
      </form>
    );
  }
}

export default Form;
