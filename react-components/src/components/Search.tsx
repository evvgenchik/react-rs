import { ChangeEvent, Component, FormEvent } from 'react';
import styles from './catalog.module.scss';
import { MyState } from '../utils/types';

class Search extends Component<object, MyState> {
  inputValue;

  constructor(props: object) {
    super(props);
    this.inputValue = localStorage.getItem('search') || '';
    this.state = { value: this.inputValue };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('search', value);
  }

  handleChange(event: ChangeEvent) {
    const { value } = event.target as HTMLInputElement;
    this.setState({ value });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { value } = this.state;
    localStorage.setItem('search', value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <form
        aria-label="form"
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          className={styles.search}
          placeholder="Search books"
        />
      </form>
    );
  }
}

export default Search;
