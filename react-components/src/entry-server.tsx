import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { booksApi } from './API/BooksServise';
import setupStore from './store/store';
import App from './App';

const store = setupStore();

export const storeTrigger = async () => {
  await Promise.all(store.dispatch(booksApi.util.getRunningQueriesThunk()));
  console.log('storeTrigger');
};

// eslint-disable-next-line import/prefer-default-export
export async function render(url, opts) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
  const preloadedState = store.getState();
  console.log(preloadedState);

  return { stream, preloadedState };
}
