import React from 'react';
import { MyState, WithRouterProps, Iroutes } from '../../../utils/types';
import styles from '../header.module.scss';

class LocationTitle extends React.PureComponent<WithRouterProps, MyState> {
  routes: Iroutes = {
    '/': 'HOME',
    '/about': 'ABOUT',
    '/form': 'FORM',
  };

  constructor(props: WithRouterProps) {
    super(props);
    this.state = { value: props.location.pathname };
  }

  render() {
    const { value } = this.state;
    return (
      <h1 className={styles.title}>{this.routes[value] || 'NOT FOUND'}</h1>
    );
  }
}

export default LocationTitle;
