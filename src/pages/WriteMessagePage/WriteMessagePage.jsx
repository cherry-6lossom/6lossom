import classes from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import classNames from 'classnames';
import style from '@/pages/WriteMessagePage/WriteMessagePage.module.scss';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import LongButton from '@/components/LongButton/LongButton';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
// import LongButtonList from './../../components/LongButtonList/LongButtonList';

const WriteMessagePage = () => {
  const handlePrev = () => {};
  const handleMakeMsg = () => {};

  return (
    <>
      <div className={classes.writeMessageWrap}>
        <header className={classes.writeMessageHeader}>
          <HeaderTitle mainText={'육캔두잇님의 벚꽃나무'} />
          <UsageDescription
            makeTreeCustomText={'makeTreeCustomText'}
            subText={'메세지를 남겨주세요'}
          />
        </header>
        <MessageInputContainer />
      </div>
    </>
  );
};

export default WriteMessagePage;
