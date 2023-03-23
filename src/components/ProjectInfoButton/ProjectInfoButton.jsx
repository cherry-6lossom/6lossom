import classes from '@/components/ProjectInfoButton/ProjectInfoButton.module.scss';
import postBox from '@/assets/main-page/click-me-postbox.png';

const ProjectInfoButton = ({ handleModal }) => {
  return (
    <>
      <button onClick={handleModal} className={classes.clickMe} type="button">
        <img className={classes.postBox} src={postBox} alt="우체통" />
        <span className={classes.clickMeText}>click me!</span>
      </button>
    </>
  );
};

export default ProjectInfoButton;
