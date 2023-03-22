import classes from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import classNames from 'classnames';
import style from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import LongButton from '@/components/LongButton/LongButton';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import LongButtonList from '@/components/LongButtonList/LongButtonList';

const WriteMessagePage = () => {
  const handlePrev = () => {};
  const handleMakeMsg = () => {};

  return (
    <div className={classes.writeMessageWrap}>
      <header className={classes.writeMessageHeader}>
        <HeaderTitle mainText={'육캔두잇님의 벚꽃나무'} />
        <UsageDescription
          className={classNames(classes.notice)}
          subText={'님에게 메세지를 남겨주세요'}
        />
      </header>
      <MessageInputContainer />
      {/* <LongButtonList
        firstText={'완료'}
        firstClick={() => alert('버튼 테스트 ')}
        secondText={'이전'}
        secondClick={() => alert('버튼 테스트 ')}
      /> */}
    </div>
  );
};

export default WriteMessagePage;
