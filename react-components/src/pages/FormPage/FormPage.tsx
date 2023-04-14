import { FC } from 'react';
import Form from '../../components/Form/Form';
import CardList from '../../components/CardList/CardList';
import { useAppSelector } from '../../hooks/redux';

const FormPage: FC = () => {
  const myBooks = useAppSelector((state) => state.myBooks.books);

  return (
    <div>
      <Form />
      {myBooks.length > 0 && <CardList cards={myBooks} />}
    </div>
  );
};

export default FormPage;
