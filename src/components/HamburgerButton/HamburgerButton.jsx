import classes from '@/components/HamburgerButton/HamburgerButton.module.scss';

function HamburgerButton() {
  return (
    <>
      <button className={classes.hamburgerButton}>
        <div className={classes.hamburger}>
          <div className={classes.burger1}></div>
          <div className={classes.burger2}></div>
          <div className={classes.burger3}></div>
        </div>
      </button>
    </>
  );
}

export default HamburgerButton;
