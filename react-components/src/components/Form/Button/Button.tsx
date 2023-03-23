import { Component } from 'react';
import { ICard } from '../../../utils/types';

class Button extends Component<{ addCard: (card: ICard) => void }> {
  constructor(props: { addCard: (card: ICard) => void }) {
    super(props);
  }

  render() {
    return <input type="submit" value="Add" />;
  }
}

export default Button;
