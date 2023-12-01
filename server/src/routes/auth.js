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

module.exports = router;
