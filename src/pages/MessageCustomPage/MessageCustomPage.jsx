// import { useNavigate } from 'react-router-dom';

import styles from '@/pages/MessageCustomPage/MessageCustomPage.module.scss';
import MessageCustomTotal from '@/components/MessageCustomTotal/MessageCustomTotal';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';

function MessageCustomPage () {
  return (
    <>
      <div className={styles.pageSetting}>
        <header className = {styles.headerTitle}>
          <HeaderTitle className = {styles.header}/>
        </header>
        <div className = {styles.headerSubTitle}>
          <UsageDescription subText={'벚꽃을 골라주세요!'} />
        </div>
        <MessageCustomTotal className = {styles.customBlossom}/>
        <footer className = {styles.buttonList}>
          <div className = {styles.buttonItem}>
            <ShortButtonList
              firstText = {'이전'}
              secondText = {'다음'}
            />
          </div>
        </footer>
      </div>
    </>
  )
}

export default MessageCustomPage;