const crypto = require('crypto');
const knex = require('../../db/index.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const enhash = (str) => {
  const hash = crypto.createHash('sha256');
  return hash.update(str).digest('hex');
};
const enSalt = () => crypto.randomBytes(6).toString('hex');

// Passportの設定
//local-signup
passport.use(
  'local-signup',
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      // 新規登録時にはユーザーの存在チェックなどを行う
      const existingUser = users.find((u) => u.user_name === username);
      if (existingUser) {
        return done(null, false, { message: 'Username already exists.' });
      }

      const salt = enSalt();
      const hashed = enhash(`${salt}${password}`);
      const createUser = {
        user_name: username,
        salt: salt,
        hased_password: hashed,
      };

      const newId = await knex('user_authentification')
        .insert(createUser)
        .returning('id')
        .then((elm) => elm[0].id);
      console.log('newId : ', newId);

      const newUser = {
        id: newId,
        user_name: username,
        salt: salt,
        hased_password: password,
      };
      users.push(newUser);

      return done(null, newUser);
    }
  )
);

//local-login
passport.use(
  'local-login',
  new LocalStrategy((username, password, done) => {
    const user = users.find(
      (u) =>
        u.user_name === username &&
        u.hased_password === enhash(`${u.salt}${password}`)
    );
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect username or password.' });
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //cookie情報を入れる際に返却するuser情報。ソルト化されたPWなどは落とすようにする。
  const user = users.find((u) => u.id === id);
  const sendUser = {
    id: user.id,
    user_name: user.user_name,
  };
  done(null, sendUser);
});
const passportAuth = passport.authenticate('local-login');
const passportSignup = passport.authenticate('local-signup');

let users = [];
const getAllUser = async (req, res, next) => {
  try {
    const tempUsers = await knex
      .select('*')
      .from('user_authentification')
      .orderBy('id');

    users = tempUsers;
    next();
  } catch (err) {
    console.log(`err : ${err}`);
  }
};

const login = (req, res) => {
  res.json({ message: 'Login successful' });
};

const checkAuth = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      authenticated: true,
      user: { id: req.user.id, username: req.user.user_name },
    });
  } else {
    res.json({ authenticated: false });
  }
};

const logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Logout successful' });
  });
  res;
};

const signup = (req, res) => {
  res.json({ message: 'Signup successful' });
};

const authController = {
  getAll: (req, res) => {},
  getOne: (req, res) => {},
};

module.exports = authController;
