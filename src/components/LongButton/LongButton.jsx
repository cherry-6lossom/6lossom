import classes from '@/components/LongButton/LongButton.module.scss';

const LongButton = () => {
  return (
    <>
      <button className={classes.longButton} type="button">
        롱버튼{' '}
      </button>
    </>
  );
};

export default LongButton;
