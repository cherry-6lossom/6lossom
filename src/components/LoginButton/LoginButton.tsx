import style from './LoginButton.module.scss';

import React from 'react';

import classNames from 'classnames';

interface LoginButtonProps {
  text:string;
  className:string;
  onClick:()=>void;
}

const LoginButton = ({ text, className, onClick }:LoginButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(style.loginButton, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LoginButton;
