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
    console.log('card');

    this.setState((prevState: { cards: ICard[] }) => {
      return { cards: [card, ...prevState.cards] };
    });
  }

  render() {
    const { cards } = this.state;
    return (
      <>
        <Form addCard={(card: ICard) => this.addCard(card)} />
        {cards.length > 0 && <CardList cards={cards} />}
      </>
    );
  }
}

export default FormPage;
