import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import App from './App';

const store = setupStore(window.PRELOADED_STATE);

delete window.PRELOADED_STATE;

const container = document.getElementById('root') as HTMLElement;

hydrateRoot(
  container,
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
