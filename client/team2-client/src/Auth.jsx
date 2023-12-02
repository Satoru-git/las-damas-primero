import React, { useEffect, useState } from 'react';
import './Auth.css';
import authApi from './api/authApi';

const Auth = (props) => {
  const { setIsAuth, setUsername } = props;
  const [authUser, setAuthUser] = useState('');
  const [authPass, setAuthPass] = useState('');
  const [authConfirmPass, setAuthConfirmPass] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const checkAuth = async () => {
    console.log('checkAuth叩きに行きますz');
    const res = await authApi.checkAuth();
    console.log('res : ', res.data);
    if (res.data.authenticated) {
      console.log('ここは通ってます');
      console.log('username', res.data.user);
      setUsername(res.data.user.username);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };
  const forceLogin = () => {
    setIsAuth(true);
  };

  useEffect(() => {
    // console.log('初回マウント時のAuth');
    checkAuth();
  }, []);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  const changeUser = (e) => {
    const setData = e.target.value;
    setAuthUser(setData);
  };
  const changePass = (e) => {
    const setData = e.target.value;
    setAuthPass(setData);
  };
  const changeConfirmPass = (e) => {
    const setData = e.target.value;
    setAuthConfirmPass(setData);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      if (!authUser || !authPass) {
        window.alert('ユーザー名とパスワードを入力してください');
        return;
      }
      const sendData = {
        username: authUser,
        password: authPass,
      };
      try {
        const res = await authApi.login(sendData);
        console.log('res : ', res.data);
        if (res.data.message) {
          console.log('ofadsfadsfasdf');
          checkAuth();
          // return;
        } else {
          window.alert('ユーザー名か、パスワードが違います。');
          // return;
        }
      } catch (err) {
        window.alert(`ユーザー名 or パスワードが違います`);
      }
    } else {
      if (!authUser || !authPass || !authConfirmPass) {
        window.alert(
          'ユーザー名とパスワードと確認パスワードを入力してください'
        );
        return;
      }
      if (authPass === authConfirmPass) {
        const sendData = {
          username: authUser,
          password: authPass,
        };
        console.log('sendData : ', sendData);
        try {
          const res = await authApi.signup(sendData);
          console.log('res : ', res.data);
          if (res.data.message) {
            console.log('通ってます。サインアプ');
            checkAuth();
          }
        } catch (err) {
          window.alert('すでに登録されているユーザー名です。');
        }
      } else {
        window.alert('パスワードとパスワード（確認）が一致しません');
        return;
      }
    }
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <div className="auth__wrap">
          <div className="auth__wrap--content">
            <div className="auth__wrap--label">
              <label htmlFor="">ユーザー名</label>
            </div>
            <div className="auth__wrap--input">
              <input type="text" onChange={changeUser} />
            </div>
          </div>
          <div className="auth__wrap--content">
            <div className="auth__wrap--label">
              <label htmlFor="">パスワード</label>
            </div>
            <div className="auth__wrap--input">
              <input type="password" onChange={changePass} />
            </div>
          </div>
          <div
            className="auth__wrap--content"
            style={{ visibility: isLogin ? 'hidden' : 'visible' }}
          >
            <div className="auth__wrap--label">
              <label htmlFor="">パスワード（確認）</label>
            </div>
            <div className="auth__wrap--input">
              <input type="password" onChange={changeConfirmPass} />
            </div>
          </div>
          <div className="auth__wrap--btn">
            <button>{isLogin ? 'ログイン' : '新規登録'}</button>
          </div>
          <div className="auth__wrap--nav">
            <label htmlFor="" onClick={loginHandler}>
              {isLogin ? '新規登録はこちら' : 'ログインはこちら'}
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Auth;
