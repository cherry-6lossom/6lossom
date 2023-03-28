import style from './ModalEnroll.module.scss';

const ModalEnroll = ({ handleCloseModal, handleComplete }) => {
  return (
    <div className={style.modalBackground}>
      <div className={style.enrollWrap}>
        <div className={style.notice}>
          <h5>편지를 남길까요?</h5>
        </div>
        <div className={style.noticeDetail}>
          <p>한 번 남긴 편지는 삭제 할 수 없어요!</p>
          <p>신중한 결정 부탁드립니다!</p>
        </div>
        <div className={style.buttonList}>
          <button className={style.cancel} onClick={handleCloseModal}>
            취소
          </button>
          <button className={style.done} onClick={handleComplete}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEnroll;
