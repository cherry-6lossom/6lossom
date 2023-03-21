import classes from '@/components/LongButton/LongButton.module.scss';
import classNames from 'classnames';

const LongButton = ({ text, onCLick }) => {
  return (
    <>
      <button className={classes.longButton} onCLick={onCLick}>
        {text}
      </button>
    </>
  );
};

export default LongButton;
