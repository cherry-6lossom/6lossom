import styles from '@/pages/MessageCustomPage/MessageCustomPage.module.scss';
import MessageCustomList from '@/components/MessageCustomList/MessageCustomList';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';
import Header from '@/components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '@/firebase/app';
import { useLayoutEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import messageCustomContext from '@/contexts/messageCustomContext';

import blossomImg1 from '@/assets/custom/cherry-blossom1.png';
import blossomImg2 from '@/assets/custom/cherry-blossom2.png';
import blossomImg3 from '@/assets/custom/cherry-blossom3.png';
import blossomImg4 from '@/assets/custom/cherry-blossom4.png';
import classNames from 'classnames';
import { useUpdateData } from '@/firebase/firestore/useUpdateData';

const blossomInfoList = [
  {
    id: 0,
    src: blossomImg1,
    isSelected: true,
  },
  {
    id: 1,
    src: blossomImg2,
    isSelected: false,
  },
  {
    id: 2,
    src: blossomImg3,
    isSelected: false,
  },
  {
    id: 3,
    src: blossomImg4,
    isSelected: false,
  },
];

const MessageCustomPage = () => {
  const navigate = useNavigate();
  const { uid } = useParams();
  const [nickname, setNickname] = useState('');
  const [blossomSrc, setBlossomSrc] = useState(
    '/src/assets/custom/cherry-blossom1.png'
  );

  useLayoutEffect(() => {
    (async () => {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      setNickname(docSnap.data().userNickname);
    })();
  }, []);

  const handleSelect = (e) => {
    const blossomImage = document.querySelector('.blossomImage');
    const buttonElement = e.target.closest('button');

    blossomInfoList.map((item) => {
      if (parseInt(buttonElement.id) === item.id) {
        blossomImage.src = item.src;
        setSelectBg(item.src);
        return;
      }
    });
  };

  const handleNext = () => {
    useUpdateData(`users/${uid}/flowerList`, {
      // flowerSrc: src,
    });
  };

  return (
    <messageCustomContext.Provider
      value={{ blossomInfoList, setBlossomSrc, handleSelect }}
    >
      <div className={styles.pageSetting}>
        <Header
          userName={nickname}
          className={styles.header}
          subText={'벚꽃을 골라주세요!'}
        />
        <div className={styles.blossomMain}>
          <img
            className={classNames('blossomImage', styles.blossomImage)}
            src={blossomSrc}
            alt="벚꽃이미지"
          />
        </div>
        <MessageCustomList className={styles.customBlossom} />
        <footer className={styles.buttonList}>
          <div className={styles.buttonItem}>
            <ShortButtonList
              firstText={'이전'}
              firstClick={() => navigate(-1)}
              secondText={'다음'}
            />
          </div>
        </footer>
      </div>
    </messageCustomContext.Provider>
  );
};

export default MessageCustomPage;
