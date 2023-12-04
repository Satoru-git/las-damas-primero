import React from "react";
// import './App.css';

const Header = (props) => {
  const { isStayedBtn, setIsStayedBtn } = props;

  const clickHndler = () => {
    setIsStayedBtn(!isStayedBtn);
  };
  return (
    <>
      <header className="header">
        <a href="/">Newtral</a>
        {/* <div className="header__btn">
          <button
            onClick={clickHndler}
            style={{ backgroundColor: isStayedBtn ? 'red' : 'white' }}
          >
            泊まったことがないホテルを優先
          </button>
        </div> */}
      </header>
    </>
  );
};

export default Header;
