import classes from '@/components/MessageInputContainer/MessageInputContainer.module.scss';
import LongButton from '../LongButton/LongButton';
import UsageDescription from '../UsageDescription/UsageDescription';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const MessageInputContainer = () => {
  return (
    <>
      <div className={classes.messageWrap}>
        <HeaderTitle mainText={'육캔두잇님의 벚꽃나무'} />
        {/* <h1 className={classes.title}>육캔두잇님의 벚꽃나무</h1> */}
        <HeaderTitle />
        <UsageDescription
          makeTreeCustomText={'makeTreeCustomText'}
          subText={'메세지를 남겨주세요'}
        />
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
      </div>
    </>
  );
};

export default MessageInputContainer;
