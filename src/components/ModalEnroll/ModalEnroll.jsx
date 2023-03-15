import classes from '@/components/ModalEnroll/ModalEnroll.module.scss';

const ModalEnroll = () => {
  return (
    <>
      <button>취소</button>
      <button>확인</button>
      <h1 className={classes.title}>육캔두잇님의 벚꽃나무</h1>
      <p>텍스트 입력</p>
      <input className={classes.nickname} type="text" />
      <input className={classes.message} type="text" />
    </>
  );
};

export default ModalEnroll;
