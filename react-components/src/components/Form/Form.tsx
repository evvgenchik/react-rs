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
import { ICard, IStateForm } from '../../utils/types';
import getFile from '../../utils/helper';
import isValid from '../../utils/validation';

class Form extends Component<{ addCard: (cards: ICard) => void }, IStateForm> {
  refsArr = {
    inputText: createRef<HTMLInputElement>(),

    inputDescription: createRef<HTMLInputElement>(),

    inputDate: createRef<HTMLInputElement>(),

    inputRadio: createRef<HTMLInputElement[] | null>(),
    inputCheckbox: createRef<HTMLInputElement>(),
    inputFile: createRef<HTMLInputElement>(),
    inputSelect: createRef<HTMLSelectElement>(),
  };

  constructor(props: { addCard: (cards: ICard) => void }) {
    super(props);

    this.state = {
      name: '',
      description: '',
      date: '',
      format: '',
      agreement: '',
      language: '',
      icon: '',
    };
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let findCheckedRadio: string | undefined;

    if (this.refsArr.inputRadio?.current) {
      const findElem = this.refsArr.inputRadio?.current.find(
        (el) => el.checked
      ) as HTMLInputElement;
      findCheckedRadio = findElem ? findElem.value : undefined;

      const card: ICard = {
        name: this.refsArr.inputText?.current?.value as string,
        description: this.refsArr.inputDescription?.current?.value as string,
        date: this.refsArr.inputDate?.current?.value as string,
        format: findCheckedRadio,
        agreement:
          this.refsArr.inputCheckbox?.current?.checked.toString() as string,
        language: this.refsArr.inputSelect?.current?.value as string,
        icon: this.refsArr.inputFile.current?.files?.[0],
      };

      console.log(isValid(card));

      const { addCard } = this.props;
      addCard(card);
    }
  };

  // createObj = (obj: typeof this.refsArr) => {
  //   const newObj = {} as ICard;
  //   for (const key in obj){
  //     isValid()
  //   }
  // };

  render() {
    const { name, date, description, format, agreement, language, icon } =
      this.state;
    return (
      <form noValidate onSubmit={this.handleSubmit} className={styles.form}>
        <Text
          errorMessage={name}
          inputRef={this.refsArr.inputText}
          LabelText="Name book:"
        />
        <Text
          errorMessage={description}
          inputRef={this.refsArr.inputDescription}
          LabelText="Description:"
        />
        <Date errorMessage={date} inputRef={this.refsArr.inputDate} />
        <Radio errorMessage={format} inputRef={this.refsArr.inputRadio} />
        <Select errorMessage={language} selectRef={this.refsArr.inputSelect} />
        <File errorMessage={icon} fileRef={this.refsArr.inputFile} />
        <Checkbox
          errorMessage={agreement}
          inputRef={this.refsArr.inputCheckbox}
        />
        <Button handleSubmit={this.handleSubmit} />
      </form>
    );
  }
}

export default Form;
