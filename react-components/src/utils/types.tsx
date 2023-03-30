import { useLocation } from 'react-router-dom';
import { RefObject } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { FieldError, FieldErrors } from 'react-hook-form/dist/types/errors';

interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

type Books = IBook[];

type MyState = { value: string };
type MyProps = { value: string };

type MyPropsHeader = { location: Location };

interface IHeader {
  location: Location;
}

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

interface Iroutes {
  [key: string]: string;
}

interface ICard {
  title: string;
  description: string;
  date: string;
  format: string;
  language: string;
  icon: string;
}

interface ICardNoValidate {
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  language: string | undefined;
}

interface IInputTextProps {
  inputRef: UseFormRegister<IFormValues>;
  LabelText?: string;
  errorMessage?: FieldError;
  type?: string;
}
interface IInputSelectProps {
  selectRef: RefObject<HTMLSelectElement>;
  errorMessage: string;
}
interface IInputFileProps {
  fileRef: RefObject<HTMLInputElement>;
  errorMessage: string;
}

interface IInputRadioProps {
  inputRef: UseFormRegister<IFormValues>;
  errorMessage?: FieldError;
  LabelText?: string;
}

interface IStateForm {
  title: string;
  description: string;
  date: string;
  format: string;
  agreement: string;
  language: string;
  icon: string;
}
interface IFormValues {
  title: string;
  description: string;
  date: string;
  format: string;
  agreement: string;
  language: string;
  icon: string;
}

interface IRefsArr {
  inputText: RefObject<HTMLInputElement>;

  inputDescription: RefObject<HTMLInputElement>;

  inputDate: RefObject<HTMLInputElement>;

  inputRadio: React.MutableRefObject<HTMLInputElement[] | null>;
  inputCheckbox: RefObject<HTMLInputElement>;
  inputFile: RefObject<HTMLInputElement>;
  inputSelect: RefObject<HTMLSelectElement>;
}

interface IValidator {
  title: (value: string) => boolean | string;
  description: (value: string) => boolean | string;
  date: (value: string) => boolean | string;
  agreement: (value: string) => boolean | string;
}

export type {
  IBook,
  Books,
  MyState,
  IHeader,
  MyPropsHeader,
  WithRouterProps,
  Iroutes,
  MyProps,
  ICard,
  ICardNoValidate,
  IInputTextProps,
  IInputSelectProps,
  IInputFileProps,
  IInputRadioProps,
  IStateForm,
  IRefsArr,
  IFormValues,
  IValidator,
};
