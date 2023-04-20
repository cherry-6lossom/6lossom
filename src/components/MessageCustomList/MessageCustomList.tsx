import styles from './MessageCustomList.module.scss';

import React, { useContext } from 'react';
import messageCustomContext from '@/contexts/messageCustomContext';

import MessageCustomItem from '@/components/MessageCustomItem/MessageCustomItem';
import { blossomInfoListType } from '@/data/blossomInfoList';

function MessageCustomList() {
  const { blossomInfoList, handleSelect } = useContext(messageCustomContext);

  return (
    <div className={styles.blossomSelect}>
      {blossomInfoList.map((item: blossomInfoListType) => (
        <MessageCustomItem
          key={item.id}
          keyId={item.id}
          item={item}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
}
export default MessageCustomList;
