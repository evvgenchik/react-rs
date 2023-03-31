import React, { FC } from 'react';
import Menu from './Menu/Menu';
import styles from './header.module.scss';
import logo from '../../assets/logo.webp';
import withRouter from '../../utils/WithRouter';
import LocationTitle from './LocationTitle/LocationTitle';

const Header: FC = () => {
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
};

export default withRouter(Header);
