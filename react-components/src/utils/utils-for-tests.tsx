import { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';

const renderWithProviders = (ui: ReactElement) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper }) };
};

export default renderWithProviders;
