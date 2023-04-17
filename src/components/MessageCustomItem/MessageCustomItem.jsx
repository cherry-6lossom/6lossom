import styles from './MessageCustomItem.module.scss';

const MessageCustomItem = ({ item, keyId, handleSelect }) => {

  const {id, src, alt} = item;

  return (
    <button
      type="button"
      key={keyId}
      id={id}
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
