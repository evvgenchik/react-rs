import { UseFormRegister } from 'react-hook-form/dist/types';
import { FieldError } from 'react-hook-form/dist/types/errors';

interface ICard {
  title: string;
  description: string;
  date: string;
  format: string;
  language: string;
  icon: string;
}

interface IInputTextProps {
  inputRef: UseFormRegister<IFormValues>;
  LabelText?: string;
  errorMessage?: FieldError;
  type?: string;
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

interface IValidator {
  title: (value: string) => boolean | string;
  description: (value: string) => boolean | string;
  date: (value: string) => boolean | string;
  agreement: (value: string) => boolean | string;
  icon: (value: FileList | string) => boolean | string;
}

export type { ICard, IInputTextProps, IFormValues, IValidator };
