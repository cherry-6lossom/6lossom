import style from '@/components/ShortButton/ShortButton.module.scss';
import classNames from 'classnames';
import githubIcon from '@/assets/brand-logo/github-logo.png';

function ShortButton({ onClick, text, className }) {
  return (
    <>
      <button
        onClick={onClick ? onClick : null}
        className={
          className
            ? classNames(className, style.shortButton)
            : style.shortButton
        }
      >
        {text === 'Github' ? (
          <img className={style.buttonImage} src={githubIcon} />
        ) : null}
        {text}
      </button>
    </>
  );
}

export default ShortButton;
