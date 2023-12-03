const router = require('express').Router();
const authController = require('../controllers/authController');

// 認証されているかどうかを確認するエンドポイント
router.get(
  '/authentification',
  //   (req, res) => {
  //     res.send('eeeeeeee');
  //   }
  authController.checkAuth
);
// ログイン時のエンドポイント
router.post(
  '/login',
  authController.getAllUser,
  authController.passportAuth,
  authController.login
);
// ログアウトエンドポイント
router.get('/logout', authController.logout);
//新規登録用のエンドポイント
router.post(
  '/signup',
  authController.getAllUser,
  authController.passportSignup,
  authController.signup
);

module.exports = router;
