import styles from './MessageCustomList.module.scss';

import { useContext } from 'react';
import messageCustomContext from '@/contexts/messageCustomContext';

import MessageCustomItem from '@/components/MessageCustomItem/MessageCustomItem';

function MessageCustomList() {
  const { blossomInfoList, handleSelect } = useContext(messageCustomContext);

  return (
    <div className={styles.blossomSelect}>
      {blossomInfoList.map((item) => (
        <MessageCustomItem
          key={item.id}
          item={item}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
}
export default MessageCustomList;
