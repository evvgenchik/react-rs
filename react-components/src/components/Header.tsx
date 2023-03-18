import React from 'react';
import Menu from './Menu';
import styles from './header.module.scss';
import logo from '../assets/logo.webp';
import { MyState, WithRouterProps } from '../utils/types';

class Header extends React.PureComponent<WithRouterProps, MyState> {
  constructor(props: WithRouterProps) {
    super(props);
    this.state = { value: props.location.pathname };
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <h1 className={styles.title}>{value !== '/' ? value : 'Home'}</h1>
        <Menu />
      </div>
    );
  }
}

export default Header;
