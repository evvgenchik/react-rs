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

export type { IBook, Books, MyState };
