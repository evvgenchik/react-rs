import fs from 'node:fs/promises';
import express from 'express';
import { useGetAllBooksQuery } from './src/API/BooksServise';

const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

const app = express();

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
    const { stream, preloadedState } = await render.render(req.originalUrl, {
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
