import { Component } from 'react';
import Form from '../../components/Form/Form';
import CardList from '../../components/CardList/CardList';
import { ICard } from '../../utils/types';

class FormPage extends Component<object, { cards: ICard[] }> {
  constructor(props: object) {
    super(props);
    this.state = { cards: [] };
  }

  addCard(card: ICard) {
    this.setState((prevState: { cards: ICard[] }) => ({
      cards: [{ ...prevState.cards, ...card }],
    }));
  }

  render() {
    const { cards } = this.state;
    return (
      <>
        <Form addCard={(card: ICard) => this.addCard(card)} />
        <CardList cards={cards} />
      </>
    );
  }
}

export default FormPage;
