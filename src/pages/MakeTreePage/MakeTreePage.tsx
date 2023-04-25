import style from './MakeTreePage.module.scss';

import React, { createContext, useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import { useUpdateData } from '@/firebase/firestore/useUpdateData';
import { useCallCollection } from '@/firebase/app';

import UsageDescription from '@/components/UsageDescription/UsageDescription';
import BackgroundCustomList from '@/components/BackgroundCustomList/BackgroundCustomList';
import ShortButtonList from '@/components/ShortButtonList/ShortButtonList';
import OriginTree from '@/components/OriginTree/OriginTree';

import backgroundImageList, { backgroundImageListType } from '@/data/backgroundImageList';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';
export interface ValueType {
  backgroundImageList:backgroundImageListType[];
  setSelectBg:React.Dispatch<string>;
  handleSelect:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}

export const BgContext = createContext({} as ValueType);

const MakeTreePage = () => {
  const [nickname, setNickname] = useState<string>('');
  const [selectBg, setSelectBg] = useState<string>(`bg-pink`);

  const navigate = useNavigate();

  const { updateData } = useUpdateData('users');

  const localUid:string = JSON.parse(localStorage.getItem('uid')||'null');

  useLayoutEffect(() => {
    useCallCollection('users').then((userList) => {
      userList.map((user) => {
        if (user.uid === localUid && user.isMade) {
          navigate(`/share-tree/${localUid}`);
        }
      });
    });
  }, []);

  const handleSelect = (e:React.MouseEvent<HTMLButtonElement>) => {
    const backgoundImage:HTMLElement|null = document.querySelector('.MakeTreePage');
    const buttonElement:HTMLButtonElement|null = (e.target as HTMLElement).closest('button');

    if(buttonElement!==null && backgoundImage !==null){
      backgroundImageList.map((item:backgroundImageListType) => {
        if (parseInt(buttonElement.id) === item.id) {
          backgoundImage.style.background = `center / cover no-repeat url(/assets/${item.bigSrc}.png)`;
          setSelectBg(item.bigSrc);
          return;
        }
      });
    }
  };

  const handleComplete = () => {
    updateData(localUid, {
      bgSrc: selectBg,
      isMade: true,
      userNickname: nickname,
    });

    navigate(`/share-tree/${localUid}`, { replace: true });

    history.pushState(null, 'null', location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };




  const value:ValueType = {
    backgroundImageList,
    setSelectBg,
    handleSelect,
  };

  return (
    <BgContext.Provider value={value}>
      <A11yHidden as={'h1'}>벚꽃이지면</A11yHidden>
      <form
        onSubmit={handleComplete}
        className={classNames('MakeTreePage', style.makeTreeContainer)}
      >
        <header className={style.header}>
          <h2 className={style.headerTitle}>
            <A11yHidden as="label" focusable={true} htmlFor={'userNickname'}>
              닉네임
            </A11yHidden>
            <input
              type="text"
              id={'userNickname'}
              name="userNickname"
              value={nickname}
              maxLength={6}
              placeholder="닉네임"
              onChange={handleChange}
              className={style.userNickname}
              required
            />
            <span>님의 벚꽃나무</span>
          </h2>
          <UsageDescription
            className={style.headerSubTitle}
            subText={'벚꽃나무에 이름을 적어주세요'}
          />
        </header>
        <div className={style.originTreeContainer}>
          <OriginTree />
        </div>
        <div className={style.makeTreeCustomContainer}>
          <div className={style.makeTreeCustom}>
            <UsageDescription
              className={style.makeTreeCustomText}
              subText={'벚꽃나무의 하늘을 선택해주세요.'}
            />
            <BackgroundCustomList />
            <ShortButtonList
              firstText={'취소'}
              firstClick={() => {
                window.location.replace('/');
              }}
              secondText={'완료'}
              type={'submit'}
            />
          </div>
        </div>
      </form>
    </BgContext.Provider>
  );
};

export default MakeTreePage;
