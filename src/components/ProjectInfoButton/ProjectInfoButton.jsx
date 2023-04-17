import style from './ProjectInfoButton.module.scss';

const ProjectInfoButton = ({ handleModal }) => {
  return (
    <>
      <button
        onClick={handleModal}
        className={style.clickMe}
        type="button"
        aria-label="프로젝트 이용 방법"
      >
        <span className={style.clickMeText}>click me!</span>
      </button>
    </>
  );
};

export default ProjectInfoButton;
