import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import styles from './form.module.scss';
import InputCustom from './InputCustom/InputCustom';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Button from './Button/Button';
import { IFormValues } from '../../utils/types';
import { useAppDispatch } from '../../hooks/redux';
import { addBook } from '../../store/myBooksSlice';

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    mode: 'onSubmit',
  });

  const dispatch = useAppDispatch();
  const [successMessage, setSuccessMessage] = useState('');

  const showSuccessMessage = () => {
    setSuccessMessage('Book was added successfully');
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  const convertFile = (data: IFormValues) => {
    const inputValueBlob = new Blob([data.icon[0]]);
    const file = URL.createObjectURL(inputValueBlob);
    const isbn13 = uuidv4();
    Object.assign(data, { icon: file, isbn13 });
    return data;
  };

  const onSubmit = handleSubmit((data) => {
    showSuccessMessage();
    const newCard = convertFile(data);

    dispatch(addBook(newCard));
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
        <InputCustom
          errorMessage={errors.title}
          inputRef={register}
          LabelText="Title"
          type="text"
        />
        <InputCustom
          errorMessage={errors.description}
          inputRef={register}
          LabelText="Description"
          type="text"
        />
        <InputCustom
          errorMessage={errors.date}
          inputRef={register}
          LabelText="Date"
          type="date"
          testID="input-date"
        />
        <Radio
          errorMessage={errors.format}
          LabelText="Format"
          inputRef={register}
        />
        <Select
          errorMessage={errors.language}
          inputRef={register}
          LabelText="Language"
        />
        <InputCustom
          errorMessage={errors.icon}
          inputRef={register}
          LabelText="Icon"
          type="file"
          testID="input-file"
        />
        <InputCustom
          errorMessage={errors.agreement}
          inputRef={register}
          LabelText="Agreement"
          type="checkbox"
        />
        <Button onSubmit={onSubmit} />
      </form>
      {successMessage ? (
        <span className={styles.successMessage}>{successMessage}</span>
      ) : (
        <span style={{ visibility: 'hidden' }}>Success:</span>
      )}
    </div>
  );
};

export default Form;
