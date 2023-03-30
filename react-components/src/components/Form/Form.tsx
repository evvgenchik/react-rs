/* eslint-disable react/jsx-props-no-spreading */
import { Component, createRef, FC, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form.module.scss';
import Text from './Text/Text';
import Checkbox from './Checkbox/Checkbox';
import Date from './Date/Date';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import File from './File/File';
import Button from './Button/Button';
import { ICard, IStateForm, IRefsArr, IFormValues } from '../../utils/types';
import validator from '../../utils/validation';

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    mode: 'onSubmit',
  });

  // successMessage = '';

  // formRef = createRef<HTMLFormElement>();

  // refsArr = {
  //   inputText: createRef<HTMLInputElement>(),
  //   inputDescription: createRef<HTMLInputElement>(),
  //   inputDate: createRef<HTMLInputElement>(),
  //   inputRadio: createRef<HTMLInputElement[] | null>(),
  //   inputSelect: createRef<HTMLSelectElement>(),
  //   inputFile: createRef<HTMLInputElement>(),
  //   inputCheckbox: createRef<HTMLInputElement>(),
  // };

  const state = {
    title: '',
    description: '',
    date: '',
    format: '',
    language: '',
    icon: '',
    agreement: '',
  };
  // }

  const onSubmit = handleSubmit((data) => {
    console.log('data');
    reset();
  });

  return (
    <div className={styles.formContainer}>
      <form
        data-testid="formAddCard"
        noValidate
        onSubmit={onSubmit}
        className={styles.form}
      >
        <Text
          errorMessage={errors.title}
          inputRef={register}
          LabelText="Title"
          type="text"
        />
        <Text
          errorMessage={errors.description}
          inputRef={register}
          LabelText="Description"
          type="text"
        />
        <Text
          errorMessage={errors.date}
          inputRef={register}
          LabelText="Date"
          type="date"
        />
        <Radio errorMessage={errors.format} inputref={register} />
        {/*
        <Select errorMessage={language} ref={register} />
        <File errorMessage={icon} ref={register} />
        <Checkbox errorMessage={agreement} ref={register} />
        */}
        <Button handleSubmit={onSubmit} />
      </form>
      {/* {this.successMessage ? (
        <span className={styles.successMessage}>{this.successMessage}</span>
      ) : (
        <span style={{ visibility: 'hidden' }}>Success:</span>
      )} */}
    </div>
  );
};
// class Form extends Component<{ addCard: (cards: ICard) => void }, IStateForm> {
//   successMessage = '';

//   formRef = createRef<HTMLFormElement>();

//   refsArr = {
//     inputText: createRef<HTMLInputElement>(),
//     inputDescription: createRef<HTMLInputElement>(),
//     inputDate: createRef<HTMLInputElement>(),
//     inputRadio: createRef<HTMLInputElement[] | null>(),
//     inputSelect: createRef<HTMLSelectElement>(),
//     inputFile: createRef<HTMLInputElement>(),
//     inputCheckbox: createRef<HTMLInputElement>(),
//   };

//   constructor(props: { addCard: (cards: ICard) => void }) {
//     super(props);

//     this.state = {
//       title: '',
//       description: '',
//       date: '',
//       format: '',
//       language: '',
//       icon: '',
//       agreement: '',
//     };
//   }

//   handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     const isValid = this.isValid(this.refsArr);

//     if (isValid) {
//       const { addCard } = this.props;
//       const card = this.createObj();

//       addCard(card);
//       this.showSuccessMessage();
//       this.formRef.current?.reset();
//     }
//   };

//   isValid(obj: IRefsArr) {
//     const keys = Object.keys(obj);
//     let validFlag = true;

//     keys.forEach((el) => {
//       const key = el as keyof IRefsArr;
//       const inputHtml = obj[key].current as
//         | HTMLInputElement
//         | HTMLInputElement[];
//       const errorMessage = validator(inputHtml);

//       if (errorMessage) validFlag = false;

//       const keyState = Array.isArray(inputHtml)
//         ? (inputHtml[0].name as keyof IStateForm)
//         : (inputHtml.name as keyof IStateForm);

//       this.setState((prevState) => ({
//         ...prevState,
//         ...{ [keyState]: errorMessage },
//       }));
//     });

//     return validFlag;
//   }

//   createObj() {
//     const formatInput = this.refsArr.inputRadio?.current?.find(
//       (input) => input.checked
//     ) as HTMLInputElement;
//     const fileInput = this.refsArr.inputFile?.current?.files?.[0] as Blob;
//     const file = URL.createObjectURL(fileInput);

//     const card: ICard = {
//       title: this.refsArr.inputText?.current?.value as string,
//       description: this.refsArr.inputDescription?.current?.value as string,
//       date: this.refsArr.inputDate?.current?.value as string,
//       format: formatInput.value as string,
//       language: this.refsArr.inputSelect?.current?.value as string,
//       icon: file,
//     };

//     return card;
//   }

//   showSuccessMessage() {
//     this.successMessage = 'Book was added successfully';

//     setTimeout(() => {
//       this.successMessage = '';

//       this.setState((prevState) => ({
//         ...prevState,
//       }));
//     }, 2000);
//   }

//   render() {
//     const { title, date, description, format, agreement, language, icon } =
//       this.state;

//     return (
//       <div className={styles.formContainer}>
//         <form
//           data-testid="formAddCard"
//           ref={this.formRef}
//           noValidate
//           onSubmit={this.handleSubmit}
//           className={styles.form}
//         >
//           <Text
//             errorMessage={title}
//             inputRef={this.refsArr.inputText}
//             LabelText="Title"
//           />
//           <Text
//             errorMessage={description}
//             inputRef={this.refsArr.inputDescription}
//             LabelText="Description"
//           />
//           <Date errorMessage={date} inputRef={this.refsArr.inputDate} />
//           <Radio errorMessage={format} inputRef={this.refsArr.inputRadio} />
//           <Select
//             errorMessage={language}
//             selectRef={this.refsArr.inputSelect}
//           />
//           <File errorMessage={icon} fileRef={this.refsArr.inputFile} />
//           <Checkbox
//             errorMessage={agreement}
//             inputRef={this.refsArr.inputCheckbox}
//           />
//           <Button handleSubmit={this.handleSubmit} />
//         </form>
//         {this.successMessage ? (
//           <span className={styles.successMessage}>{this.successMessage}</span>
//         ) : (
//           <span style={{ visibility: 'hidden' }}>Success:</span>
//         )}
//       </div>
//     );
//   }
// }

export default Form;
function inputRef(
  arg0: string,
  arg1: { required: string }
): JSX.IntrinsicAttributes &
  import('react').ClassAttributes<HTMLInputElement> &
  import('react').InputHTMLAttributes<HTMLInputElement> {
  throw new Error('Function not implemented.');
}
