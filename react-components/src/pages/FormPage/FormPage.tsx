import { Component } from 'react';
import Form from '../../components/Form/Form';
import CardList from '../../components/CardList/CardList';
import { ICard } from '../../utils/types';

class FormPage extends Component {
  constructor(props: object) {
    super(props);
    this.state = { cards: [] };
  }

  addCard(card: ICard) {
    console.log(card);
    this.setState((prevState: object) => [{ ...prevState, ...card }]);
  }

  render() {
    return (
      <>
        <Form addCard={(card: ICard) => this.addCard(card)} />
        <CardList />
      </>
    );
  }
}

export default FormPage;
