import { FC, useState } from 'react';
import Form from '../../components/Form/Form';
import CardList from '../../components/CardList/CardList';
import { ICard, IFormValues } from '../../utils/types';

const FormPage: FC = () => {
  const [cardsArr, setCardsArr] = useState<ICard[]>([]);

  const addCard = (card: IFormValues) => {
    setCardsArr([card, ...cardsArr]);
  };

  return (
    <div>
      <Form addCard={addCard} />
      {cardsArr.length > 0 && <CardList cards={cardsArr} />}
    </div>
  );
};

export default FormPage;
