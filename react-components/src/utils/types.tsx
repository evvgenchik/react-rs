import { useLocation } from 'react-router-dom';

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
  date: string;
  agreement: boolean;
  download: boolean;
  language: string;
  icon: string;
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
};
