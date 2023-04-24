import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { booksApi } from './API/BooksServise';
import setupStore from './store/store';
import App from './App';

const store = setupStore();

const data = Promise.all(
  store.dispatch(booksApi.util.getRunningQueriesThunk())
).then((values) => console.log(values));

// eslint-disable-next-line import/prefer-default-export
export function render(url, opts) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
  const preloadedState = store.getState();

  return { stream, preloadedState };
}
