import classes from '@/components/MessageInputContainer/MessageInputContainer.module.scss';
import LongButton from '../LongButton/LongButton';
import UsageDescription from '../UsageDescription/UsageDescription';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { useState } from 'react';
const MessageInputContainer = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert('한번남긴 편지는 삭제할 수 없어요');
  };

  return (
    <>
      <div className={classes.messageWrap}>
        <HeaderTitle mainText={'육캔두잇님의 벚꽃나무'} />
        <HeaderTitle />
        <UsageDescription
          makeTreeCustomText={'makeTreeCustomText'}
          subText={'메세지를 남겨주세요'}
        />
        <div className={classes.authorContainer}>
          <input
            className={classes.nickname}
            name="author"
            placeholder="작성자이름을 적어주세요"
            type="text"
            value={state.author}
            onChange={handleChangeState}
          />
        </div>
        <div className={classes.contentContainer}>
          <textarea
            className={classes.message}
            name="content"
            placeholder="메세지를 작성해주세요"
            type="text"
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
        <button onClick={handleSubmit}>완료</button>
      </div>
    </>
  );
};

export default MessageInputContainer;
