// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from './App';

// export function render() {
//   const html = ReactDOMServer.renderToString(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
//   return { html };
// }

import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import setupStore from './store/store';
import App from './App';

// eslint-disable-next-line import/prefer-default-export
export function render(url, opts) {
  const store = setupStore();
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
