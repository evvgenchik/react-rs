import React from 'react';
import Menu from './Menu/Menu';
import styles from './header.module.scss';
import logo from '../../assets/logo.webp';
import { MyState, WithRouterProps } from '../../utils/types';
import withRouter from '../../utils/WithRouter';
import LocationTitle from './LocationTitle/LocationTitle';

class Header extends React.PureComponent<WithRouterProps, MyState> {
  render() {
    const LocationTitleWithRouter = withRouter(LocationTitle);

    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <LocationTitleWithRouter />
        <Menu />
      </div>
    );
  }
}

export default withRouter(Header);
