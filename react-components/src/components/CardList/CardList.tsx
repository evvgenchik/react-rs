import { useState } from 'react';
import Product from '../Product/Product';
import styles from './CardList.module.scss';
import { ICard } from '../../utils/types';
import ModalBook from '../ModalBook/ModalBook';
import { useLazyGetSpecificBookQuery } from '../../API/BooksServise';

function CardList({ cards, isError }: { cards: ICard[]; isError?: boolean }) {
  const [currentBook, setCurrentBook] = useState<ICard>();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [getScpecificBook] = useLazyGetSpecificBookQuery();

  if (isError) {
    return <h2 className={styles.error}>Sorry, but something went wrong</h2>;
  }
  if (!cards || !cards.length) {
    return <h2 className={styles.error}>Books not found</h2>;
  }

  const cardClickHandler = async (isbn13: string) => {
    const { data: book } = await getScpecificBook(isbn13);

    if (book && book[0]) {
      setCurrentBook(book[0]);
      setModalActive(true);
    }
  };

  return (
    <>
      <ul className={styles.list}>
        {cards.map((book) => (
          <Product
            cardClickHandler={cardClickHandler}
            book={book}
            key={book.isbn13}
          />
        ))}
      </ul>
      <ModalBook
        book={currentBook}
        active={modalActive}
        setModalActive={setModalActive}
      />
    </>
  );
}

export default CardList;
