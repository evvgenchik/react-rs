import fs from 'node:fs/promises';
import express from 'express';

const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

const app = express();

function renderFullPage(html: any, preloadedState: any) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="./src/assets/logo.webp" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ITBooks</title>
    </head>
    <body>
      <script type="module">
        import RefreshRuntime from 'http://localhost:5173/@react-refresh';
        RefreshRuntime.injectIntoGlobalHook(window);
        window.$RefreshReg$ = () => {};
        window.$RefreshSig$ = () => (type) => type;
        window.__vite_plugin_react_preamble_installed__ = true;
      </script>
      <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // https://redux.js.org/usage/server-rendering#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
      )}
    </script>
    </body>
  </html>
    `;
}

const { createServer } = await import('vite');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  base,
});
app.use(vite.middlewares);

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('*', async (req, res) => {
  try {
    //const url = req.originalUrl.replace(base, '');

    let template = await fs.readFile('./index.html', 'utf-8');
    const render = await vite.ssrLoadModule('/src/entry-server.tsx');
    const parts = template.split('<!--app-head-->');

    res.write(parts[0]);
    let didError = false;
    const { stream, preloadedState } = render.render(req.originalUrl, {
      bootstrapModules: ['./src/entry-client.tsx'],
      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        // res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
      },
      onShellError(err: Error) {
        console.log(err);
        res.statusCode = 500;
        res.send(
          '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
        );
      },
      onAllReady() {
        res.write(`<script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>`);
        res.write(parts[1]);
        res.end();
      },
      onError(err: Error) {
        didError = true;
        console.error(err);
      },
    });

    // const html = template
    //   .replace(`<!--app-head-->`, rendered.head ?? '')
    //   .replace(`<!--app-html-->`, rendered.html ?? '');

    // res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e: unknown) {
    const error = e as Error;
    vite?.ssrFixStacktrace(error);
    console.log(error.stack);
    res.status(500).end(error.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
