import style from './HamburgerButton.module.scss';

function HamburgerButton() {
  return (
    <button className={style.hamburgerButton}>
      <div className={style.hamburger}>
        <div className={style.burger1}></div>
        <div className={style.burger2}></div>
        <div className={style.burger3}></div>
      </div>
    </button>
  );
}

export default HamburgerButton;
