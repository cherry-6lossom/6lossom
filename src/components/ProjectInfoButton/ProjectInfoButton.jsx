import classes from '@/components/ProjectInfoButton/ProjectInfoButton.module.scss';

const ProjectInfoButton = ({ handleModal }) => {
  return (
    <>
      <button onClick={handleModal} className={classes.clickMe} type="button">
        <span className={classes.clickMeText}>click me!</span>
      </button>
    </>
  );
};

export default ProjectInfoButton;
