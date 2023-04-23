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
app.use(vite.middlewares);

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('*', async (req, res) => {
  try {
    //const url = req.originalUrl.replace(base, '');

    let template = await fs.readFile('./index.html', 'utf-8');
    //const parts = template.split('<!--app-head-->');
    const render = await vite.ssrLoadModule('/src/entry-server.tsx');

    // res.write(parts[0]);
    let didError = false;
    const stream = render.render(req.originalUrl, {
      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send(
          '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
        );
      },
      // onAllReady() {
      //   // last thing to write
      //   res.write(parts[1]);
      //   res.end();
      // },
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
