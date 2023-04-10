import styles from './MessageCustomItem.module.scss';

const MessageCustomItem = ({ src, keyId, id, handleSelect }) => {
  return (
    <button
      type="button"
      key={keyId}
      id={id}
      onClick={handleSelect}
      className={styles.blossomButton}
      aria-label={`벚꽃모양${id + 1} 선택`}
    >
      <img
        className={styles.blossomImage}
        src={`/assets/${src}.png`}
        alt={`벚꽃모양${id + 1}`}
      />
    </button>
  );
};

export default MessageCustomItem;
