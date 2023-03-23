import styles from '@/components/MessageCustomList/MessageCustomList.module.scss';
import messageCustomContext from '@/contexts/messageCustomContext';
import { useContext } from 'react';
import MessageCustomItem from '@/components/MessageCustomItem/MessageCustomItem';

function MessageCustomList() {
  const { blossomInfoList, handleSelect } = useContext(messageCustomContext);

  return (
    <div className={styles.blossomSelect}>
      {blossomInfoList.map((item) => (
        <MessageCustomItem
          src={item.src}
          id={item.id}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
}
export default MessageCustomList;
