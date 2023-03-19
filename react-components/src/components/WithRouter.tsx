import React from 'react';
import { useLocation } from 'react-router-dom';
import { WithRouterProps } from '../utils/types';

const withRouter = (Component: React.ComponentType<WithRouterProps>) => {
  const ComponentWithRouter = () => {
    const location = useLocation();

    return <Component location={location} />;
  };

  return ComponentWithRouter;
};

export default withRouter;
