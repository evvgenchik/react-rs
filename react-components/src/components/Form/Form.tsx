import { Component, createRef, FormEvent } from 'react';
import styles from './form.module.scss';
import Text from './Text/Text';
import Checkbox from './Checkbox/Checkbox';
import Date from './Date/Date';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import File from './File/File';
import Button from './Button/Button';
import { ICard, IStateForm, IRefsArr } from '../../utils/types';
import validation from '../../utils/validation';

class Form extends Component<{ addCard: (cards: ICard) => void }, IStateForm> {
  refsArr = {
    inputText: createRef<HTMLInputElement>(),

    inputDescription: createRef<HTMLInputElement>(),

    inputDate: createRef<HTMLInputElement>(),

    inputRadio: createRef<
      HTMLInputElement[] | null
    >() as React.MutableRefObject<HTMLInputElement[] | null>,
    inputCheckbox: createRef<HTMLInputElement>(),
    inputFile: createRef<HTMLInputElement>(),
    inputSelect: createRef<HTMLSelectElement>(),
  };

  constructor(props: { addCard: (cards: ICard) => void }) {
    super(props);

    this.state = {
      title: '',
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
    console.log(this.isValid(this.refsArr));

    // this.createObj(this.refsArr);

    // let findCheckedRadio: string | undefined;

    // if (this.refsArr.inputRadio?.current) {
    //   const findElem = this.refsArr.inputRadio?.current.find(
    //     (el) => el.checked
    //   ) as HTMLInputElement;
    //   findCheckedRadio = findElem ? findElem.value : undefined;

    //   const card: ICard = {
    //     name: this.refsArr.inputText?.current?.value as string,
    //     description: this.refsArr.inputDescription?.current?.value as string,
    //     date: this.refsArr.inputDate?.current?.value as string,
    //     format: findCheckedRadio,
    //     agreement:
    //       this.refsArr.inputCheckbox?.current?.checked.toString() as string,
    //     language: this.refsArr.inputSelect?.current?.value as string,
    //     icon: this.refsArr.inputFile.current?.files?.[0],
    //   };

    //   console.log(isValid(card));

    //   const { addCard } = this.props;
    //   addCard(card);
    // }
  };

  isValid(obj: IRefsArr) {
    const keys = Object.keys(obj);
    let validFlag = true;

    return keys.forEach((el) => {
      const key = el as keyof IRefsArr;
      let inputHtml = obj[key].current as HTMLInputElement | HTMLInputElement[];

      if (key === 'inputRadio' && Array.isArray(inputHtml)) {
        const CheckedInput = inputHtml.find((input) => input.checked);

        if (!CheckedInput) {
          this.setState({ format: 'Please select format' });
          validFlag = false;
          return false;
        }

        inputHtml = CheckedInput;
      } else if (key === 'inputFile') {
        inputHtml = inputHtml as HTMLInputElement;
        const fileInput = inputHtml.files?.[0];

        if (!fileInput) {
          this.setState({ icon: 'Please add icon' });
          validFlag = false;
          return false;
        }

        if (fileInput.type.split('/')[0] !== 'image') {
          this.setState({
            icon: 'Please add correct image format',
          });
          validFlag = false;
          return false;
        }

        return true;
      } else {
        inputHtml = inputHtml as HTMLInputElement;
        const inputName = inputHtml.name;
        const inputValue = inputHtml.value;
        const errorMessage = validation(inputName, inputValue);
        if (errorMessage) {
          this.setState((prevState) => ({
            ...prevState,
            [inputName]: errorMessage,
          }));
          validFlag = false;
          return false;
        }
      }

      return validFlag;
    });
  }

  // createObj = (obj: IRefsArr) => {
  //   const newObj = {} as ICard;
  //   const keys = Object.keys(obj);
  //   const isValid = keys.every((el) => {
  //     const key = el as keyof IRefsArr;
  //     let inputHtml = obj[key].current as HTMLInputElement | HTMLInputElement[];

  //     if (key === 'inputRadio' && Array.isArray(inputHtml)) {
  //       const CheckedInput = inputHtml.find((input) => input.checked);
  //       if (!CheckedInput) {
  //         this.setState({ format: 'Please select format' });
  //         return true;
  //       }
  //       inputHtml = CheckedInput;
  //     } else if (key === 'inputFile') {
  //       inputHtml = inputHtml as HTMLInputElement;
  //       const fileInput = inputHtml.files?.[0];
  //       if (!fileInput) {
  //         this.setState({ icon: 'Please add icon' });
  //         return true;
  //       }
  //       if (fileInput.type.split('/')[0] === 'image') {
  //         this.setState({ icon: 'Please add correct image format' });
  //         return true;
  //       }
  //       return true;
  //     } else inputHtml = inputHtml as HTMLInputElement;

  //     const inputName = inputHtml.name;
  //     const inputValue = (name = 'file')
  //       ? URL.createObjectURL(inputHtml.files?.[0])
  //       : inputHtml.value;
  //     console.log(inputValue);
  //     console.log(inputName);
  //     return true;
  //   });
  // };

  render() {
    const { title, date, description, format, agreement, language, icon } =
      this.state;
    return (
      <form noValidate onSubmit={this.handleSubmit} className={styles.form}>
        <Text
          errorMessage={title}
          inputRef={this.refsArr.inputText}
          LabelText="Title"
        />
        <Text
          errorMessage={description}
          inputRef={this.refsArr.inputDescription}
          LabelText="Description"
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
