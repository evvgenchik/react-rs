import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { booksApi } from './API/BooksServise';
import { setupStore } from './store';
import App from './App';
import { IRenderToPipeableStream } from './utils/types';

const store = setupStore();

export const storeTrigger = async () => {
  store.dispatch(booksApi.endpoints.getAllBooks.initiate(''));
  const res = await Promise.all(
    store.dispatch(booksApi.util.getRunningQueriesThunk())
  );
  return res;
};

export async function render(url: string, opts: IRenderToPipeableStream) {
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
