import style from './LoginButton.module.scss';

import classNames from 'classnames';

const LoginButton = ({ text, className, onClick }) => {
  return (
    <button
      className={classNames(style.loginButton, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LoginButton;
