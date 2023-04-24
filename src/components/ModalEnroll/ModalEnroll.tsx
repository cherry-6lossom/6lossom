import style from './ModalEnroll.module.scss';

import React from 'react';

interface ModalEnrollProp {
  handleCloseModal: () => void;
  handleComplete: () => void;
}

const ModalEnroll = ({ handleCloseModal, handleComplete }: ModalEnrollProp) => {
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="TITLE"
      aria-describedby="CONTENTS"
      className={style.modalBackground}
    >
      <div className={style.enrollWrap}>
        <div className={style.notice}>
          <span id="TITLE">편지를 남길까요?</span>
        </div>
        <div className={style.noticeDetail}>
          <p id="CONTENTS">
            한 번 남긴 편지는 삭제 할 수 없어요!
            <br />
            신중한 결정 부탁드립니다!
          </p>
        </div>
        <div className={style.buttonList}>
          <button
            type="button"
            className={style.cancel}
            onClick={handleCloseModal}
          >
            취소
          </button>
          <button type="button" className={style.done} onClick={handleComplete}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEnroll;
