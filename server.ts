import express, { Request, Response } from 'express';
import next from 'next';

const { parse } = require('url');

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const dev = env !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.all('*', (req: Request, res: Response) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/a', query);
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  try {
    server.listen(port, (err?: any) => {
      if (err) {
        throw err;
      }
    });

    // eslint-disable-next-line no-console
    console.log(`---> Ready on localhost:${port} - env ${env}`);
  } catch (e) {
    console.error(e);

    process.exit(1);
  }
})();
