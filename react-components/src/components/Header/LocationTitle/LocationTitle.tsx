import React, { FC } from 'react';
import { WithRouterProps, Iroutes } from '../../../utils/types';
import styles from '../header.module.scss';

const LocationTitle: FC<WithRouterProps> = ({ location }) => {
  const routes: Iroutes = {
    '/': 'HOME',
    '/about': 'ABOUT',
    '/form': 'FORM',
  };

  return <h1 className={styles.title}>{routes[location.pathname] || 'NOT FOUND'}</h1>;
};

export default LocationTitle;
