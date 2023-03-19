import React from 'react';
import { MyState, WithRouterProps } from '../utils/types';
import styles from './header.module.scss';

class LocationTitle extends React.PureComponent<WithRouterProps, MyState> {
  constructor(props: WithRouterProps) {
    super(props);
    this.state = { value: props.location.pathname };
  }

  render() {
    const { value } = this.state;
    const path = value.slice(1).toUpperCase();

    return <h1 className={styles.title}>{path || 'HOME'}</h1>;
  }
}

export default LocationTitle;
