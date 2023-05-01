import fs from 'node:fs/promises';
import express from 'express';

const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

const app = express();

const { createServer } = await import('vite');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  base,
});

app
  .use(vite.middlewares)
  .get('/favicon.ico', (req, res) => res.status(204))
  .use('*', async (req, res) => {
    try {
      const template = await fs.readFile('./index.html', 'utf-8');
      const render = await vite.ssrLoadModule('/src/entry-server.tsx');
      const parts = template.split('<!--app-body-->');
      await render.storeTrigger();

      res.write(parts[0]);
      let didError = false;
      const { stream, preloadedState } = await render.render(req.originalUrl, {
        bootstrapModules: ['./src/entry-client.tsx'],
        onShellReady() {
          res.statusCode = didError ? 500 : 200;
          stream.pipe(res);
        },
        onShellError(err: unknown) {
          console.error(err);
          res.statusCode = 500;
          res.send(
            '<!doctype html><p>Sorry, but something went wrong</p><script src="clientrender.js"></script>'
          );
        },
        onAllReady() {
          res.write(`<script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>`);
          res.write(parts[1]);
          res.end();
        },
        onError(err: unknown) {
          didError = true;
          console.error(err);
        },
      });
    } catch (e: unknown) {
      const error = e as Error;
      vite?.ssrFixStacktrace(error);
      console.error(error.stack);
      res.status(500).end(error.stack);
    }
  });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
});
