import classes from '@/components/ModalEnroll/ModalEnroll.module.scss';
import LongButton from '../LongButton/LongButton';

const MessageInputContainer = () => {
  return (
    <>
      <h1 className={classes.title}>육캔두잇님의 벚꽃나무</h1>
      <p>텍스트 입력</p>
      <div className={classes.inputContainer}>
        <input
          className={classes.nickname}
          placeholder="작성자이름을 적어주세요"
          type="text"
        />
        <input
          className={classes.message}
          placeholder="메세지를 작성해주세요"
          type="text"
        />
      </div>
      <LongButton />
      <LongButton />
    </>
  );
};

export default MessageInputContainer;
