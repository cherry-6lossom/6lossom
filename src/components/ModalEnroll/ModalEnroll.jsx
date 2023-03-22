import styles from '@/components/ModalEnroll/ModalEnroll.module.scss';
import ModalButtonList from '@/components/ModalButtonList/ModalButtonList';
// import ModalButton from '@/components/ModalButton/ㄴModalButton';

const ModalEnroll = () => {
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.enrollWrap}>
          <div className={styles.notice}>
            <h5>편지를 남길까요?</h5>
          </div>
          <div className={styles.noticeDetail}>
            <p>한 번 남긴 편지는 삭제 할 수 없어요!</p>
            <p>신중한 결정 부탁드립니다!</p>
          </div>
          <div className={styles.buttonList}>
            <button className={styles.cancel}>취소</button>
            <button className={styles.done}>완료</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEnroll;
