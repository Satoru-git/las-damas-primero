const crypto = require('crypto');

const enhash = (str) => {
  const hash = crypto.createHash('sha256');
  return hash.update(str).digest('hex');
};
const enSalt = () => crypto.randomBytes(6).toString('hex');

const pass = 1234;
console.log(enhash(pass));

// pass : '1234';
// salt = 'a1b92z7';
// afterhash : 41daafda9a68bcbbe970606097cc1c3155603210cadd4a0799527c1cc3427c46
