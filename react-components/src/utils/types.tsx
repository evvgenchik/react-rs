import { useLocation } from 'react-router-dom';
import { LegacyRef } from 'react';

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
  name: string;
  description: string;
  date: string;
  agreement: boolean;
  format: string;
  language: string;
  icon: string;
}

interface ICardNoValidate {
  name: string | undefined;
  description: string | undefined;
  date: string | undefined;
  agreement: boolean | undefined;
  format: string | undefined;
  language: string | undefined;
  icon: string | undefined;
}

interface IInputTextProps {
  inputRef: LegacyRef<HTMLInputElement>;
  LabelText: string;
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
};
