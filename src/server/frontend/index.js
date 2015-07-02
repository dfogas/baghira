import compression from 'compression';
import config from '../config';
import express from 'express';
// import favicon from 'serve-favicon';
import render from './render';

const app = express();

app.use(compression());

app.use('/build', express.static('build'));
app.use('/assets', express.static('assets'));

app.use((req, res, next) => {
  const acceptsLanguages = req.acceptsLanguages(config.appLocales);

  req.userState = {
    i18n: {
      locales: acceptsLanguages || config.defaultLocale
    }
  };

  // Simulate async loading from DB.
  setTimeout(() => {
    next();
  }, 20);
});

app.get('*', (req, res, next) => {
  render(req, res, req.userState).catch(next);
});

app.on('mount', () => {
  console.log('App is available at %s', app.mountpath);
});

export default app;
