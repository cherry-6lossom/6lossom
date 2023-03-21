import classes from '@/components/ModalEnroll/ModalEnroll.module.scss';

const ModalEnroll = () => {
  return (
    <>
      <div className={classes.enrollWrap}>
        <div className={classes.notice}>
          <h5>편지를 남길까요?</h5>
        </div>
        <div className={classes.noticeDetail}>
          <p>한 번 남긴 편지는 삭제 할 수 없어요!</p>
          <p>신중한 결정 부탁드립니다!</p>
        </div>
        <button>no!</button>
        <button>yes!</button>
      </div>
    </>
  );
};

export default ModalEnroll;
