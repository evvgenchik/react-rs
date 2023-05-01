import { UseFormRegister } from 'react-hook-form/dist/types';
import { FieldError } from 'react-hook-form/dist/types/errors';
import { useLocation } from 'react-router-dom';

interface ICard {
  title: string;
  description: string;
  date: string;
  format: string;
  language: string;
  icon: string;
  isbn13: string;
}

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

interface Iroutes {
  [key: string]: string;
}

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

interface IInputTextProps {
  inputRef: UseFormRegister<IFormValues>;
  LabelText?: string;
  errorMessage?: FieldError;
  type?: string;
  testID?: string;
}

interface IFormValues {
  title: string;
  description: string;
  date: string;
  format: string;
  agreement: string;
  language: string;
  icon: string;
  isbn13: string;
}

interface IValidator {
  title: (value: string) => boolean | string;
  description: (value: string) => boolean | string;
  date: (value: string) => boolean | string;
  agreement: (value: string) => boolean | string;
  icon: (value: FileList | string) => boolean | string;
}

interface IModalBook {
  book?: ICard;
  active: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IRenderToPipeableStream {
  bootstrapModules: string[];
  onShellReady(): void;
  onShellError(err: unknown): void;
  onAllReady(): void;
  onError(err: unknown): void;
}

declare global {
  interface Window {
    PRELOADED_STATE: never;
  }
}

export type {
  ICard,
  IInputTextProps,
  IFormValues,
  IValidator,
  WithRouterProps,
  Iroutes,
  IModalBook,
  IRenderToPipeableStream,
};
