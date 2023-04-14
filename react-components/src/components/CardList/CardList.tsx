import { useState } from 'react';
import Product from '../Product/Product';
import styles from './CardList.module.scss';
import { ICard } from '../../utils/types';
import ModalBook from '../ModalBook/ModalBook';
import BooksServise from '../../API/BooksServise';

function CardList({ cards, isError }: { cards: ICard[]; isError?: boolean }) {
  const [cardForModal, setCardForModal] = useState<ICard>();
  const [modalActive, setModalActive] = useState<boolean>(false);

  if (isError) {
    return <h2 className={styles.error}>Sorry, but something went wrong.</h2>;
  }
  if (!cards || !cards.length) {
    return <h2 className={styles.error}>Books not found</h2>;
  }

  const cardClickHandler = async (isbn13: string) => {
    const cardFromServer = await BooksServise.getSpecific(isbn13);
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
