const express = require('express');
const path = require('path');
const apiRoute = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');

const setUpServer = () => {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      secret: 'your-secret-key2',
      resave: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(
    express.static(path.join(__dirname, '../../client/team2-client/dist'))
  );

  // app.get('*', (req, res) => {
  //   res.sendFile(
  //     path.join(__dirname, '../../client/team2-client/dist/index.html')
  //   );
  // });
  app.use('/api/v1', apiRoute);

  return app;
};

module.exports = { setUpServer };
