import styles from './MessageCustomItem.module.scss';

const MessageCustomItem = ({ src, id, handleSelect }) => {
  return (
    <button
      type="button"
      id={id}
      onClick={handleSelect}
      className={styles.blossomButton}
    >
      <img
        className={styles.blossomImage}
        src={`/assets/${src}.png`}
        alt={`벚꽃모양${id}`}
      />
    </button>
  );
};

export default MessageCustomItem;
