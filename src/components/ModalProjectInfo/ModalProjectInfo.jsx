import classes from '@/components/ModalProjectInfo/ModalProjectInfo.module.scss';

const ModalProjectInfo = ({ handleModal }) => {
  return (
    <>
      <div className={classes.ProjectInfoBackground}>
        <div className={classes.ProjectInfoContainer}>
          <button
            className={classes.projectInfoClose}
            type="button"
            alt="닫기"
            onClick={handleModal}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalProjectInfo;
