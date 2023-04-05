import { useState } from 'react';
import Product from '../Product/Product';
import styles from './CardList.module.scss';
import { ICard } from '../../utils/types';
import ModalBook from '../ModalBook';
import BooksServise from '../../API/BooksServise';

function CardList({
  cards,
  errorMessage,
}: {
  cards: ICard[];
  errorMessage?: string;
}) {
  const [cardForModal, setCardForModal] = useState<ICard>();
  const [modalActive, setModalActive] = useState<boolean>(false);

  if (errorMessage) {
    return (
      <h2 className={styles.error}>
        {' '}
        Sorry, but something went wrong. <br /> {errorMessage}
      </h2>
    );
  }
  if (!cards || !cards.length) {
    return <h2 className={styles.error}>Books not found</h2>;
  }

  const fetchData = async (isbn13: string) => {
    const response = await BooksServise.getSpecific(isbn13);
    return response;
  };

  const cardClickHandler = async (isbn13: string) => {
    const cardFromServer = await fetchData(isbn13);
    if (cardFromServer[0]) {
      setCardForModal(cardFromServer[0]);
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
        book={cardForModal}
        active={modalActive}
        setModalActive={setModalActive}
      />
    </>
  );
}

export default CardList;
