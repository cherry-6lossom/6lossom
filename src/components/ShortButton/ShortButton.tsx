import style from './ShortButton.module.scss';

import React from 'react';

import classNames from 'classnames';

import githubIcon from '@/assets/brand-logo/github-logo.png';

interface ShortButtonProp {
  type?:'button'|'submit';
  onClick?:()=>void;
  text:string;
  className?:string;
}

function ShortButton({ type='button', onClick, text, className='' }:ShortButtonProp) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={ classNames(className, style.shortButton)}
    >
      {text === 'Github' ? (
        <img className={style.buttonImage} src={githubIcon} />
      ) : null}
      {text}
    </button>
  );
}

export default ShortButton;
