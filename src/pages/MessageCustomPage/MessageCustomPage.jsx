import styles from '@/pages/MessageCustomPage/MessageCustomPage.module.scss';
import MessageCustomList from '@/components/MessageCustomList/MessageCustomList';
import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import UsageDescription from '@/components/UsageDescription/UsageDescription';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';
import Header from '@/components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { db, useCallCollection } from '@/firebase/app';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  getCountFromServer,
  getDoc,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import messageCustomContext from '@/contexts/messageCustomContext';

import blossomImg1 from '@/assets/custom/cherry-blossom1.png';
import blossomImg2 from '@/assets/custom/cherry-blossom2.png';
import blossomImg3 from '@/assets/custom/cherry-blossom3.png';
import blossomImg4 from '@/assets/custom/cherry-blossom4.png';
import classNames from 'classnames';

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
  const [pageTotalCount, setPageTotalCount] = useState(0);

  const [nickname, setNickname] = useState('');
  const [blossomSrc, setBlossomSrc] = useState(
    '/src/assets/custom/cherry-blossom1.png'
  );

  const getPageTotalCount = async () => {
    const flowerListRef = collection(db, `users/${uid}/flowerList`);
    const res = await getCountFromServer(
      query(flowerListRef, orderBy('createAt', 'asc'))
    );

    setPageTotalCount(res.data().count);
  };

  useLayoutEffect(() => {}, []);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      setNickname(docSnap.data().userNickname);
      getPageTotalCount();
    })();
  }, []);

  const handleSelect = (e) => {
    const blossomImage = document.querySelector('.blossomImage');
    const buttonElement = e.target.closest('button');

    blossomInfoList.map((item) => {
      if (parseInt(buttonElement.id) === item.id) {
        blossomImage.src = item.src;
        setBlossomSrc(item.src);
        return;
      }
    });
  };

  const handleNext = async () => {
    const flowerRef = doc(
      db,
      'users',
      uid,
      'flowerList',
      String(pageTotalCount)
    );

    await setDoc(flowerRef, {
      nickname: '',
      contents: '',
      flowerSrc: blossomSrc,
    });

    navigate(`/write-message/${uid}/${pageTotalCount}`);
  };

  return (
    <messageCustomContext.Provider
      value={{ blossomInfoList, setBlossomSrc, handleSelect }}
    >
      <div className={styles.pageSetting}>
        <div className={styles.header}>
          <Header userName={nickname} subText={'벚꽃을 골라주세요!'} />
        </div>
        <div className={styles.blossomMain}>
          <img
            className={classNames('blossomImage', styles.blossomImage)}
            src={blossomSrc}
            alt="벚꽃이미지"
          />
        </div>
        <MessageCustomList className={styles.customBlossom} />
        <ShortButtonList
          firstText={'이전'}
          firstClick={() => navigate(-1)}
          secondText={'다음'}
          secondClick={handleNext}
        />
      </div>
    </messageCustomContext.Provider>
  );
};

export default MessageCustomPage;
