import style from './ProjectInfoButton.module.scss';

const ProjectInfoButton = ({ handleModal }) => {
  return (
    <>
      <button onClick={handleModal} className={style.clickMe} type="button">
        <span className={style.clickMeText}>click me!</span>
      </button>
    </>
  );
};

export default ProjectInfoButton;
