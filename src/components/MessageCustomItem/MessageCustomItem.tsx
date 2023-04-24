import { blossomInfoListType } from '@/data/blossomInfoList';
import styles from './MessageCustomItem.module.scss';

import React from 'react';

interface MessageCustomItemProp {
  item: blossomInfoListType;
  keyId: number;
  handleSelect: () => void;
}

const MessageCustomItem = ({
  item,
  keyId,
  handleSelect,
}: MessageCustomItemProp) => {
  const { id, src, alt } = item;

  return (
    <button
      type="button"
      key={keyId}
      id={String(id)}
      onClick={handleSelect}
      className={styles.blossomButton}
      aria-label={alt}
    >
      <img
        className={styles.blossomImage}
        src={`/assets/${src}.png`}
        alt={alt}
      />
    </button>
  );
};

export default MessageCustomItem;
