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
  format: boolean;
  language: string;
  icon: string;
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
  IInputTextProps,
};
