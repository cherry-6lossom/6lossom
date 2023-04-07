import style from './BackgroundCustomItem.module.scss';

const BackgroundCustomItem = ({ keyId, item, handleSelect }) => {
  const { id, smallSrc, alt } = item;
  return (
    <li key={keyId} className={style.backgroundCustomItem}>
      <button
        onClick={handleSelect}
        className={style.backgroundCustomButton}
        type={'button'}
        id={id}
      >
        <img src={smallSrc} alt={alt} />
        <span className={style.backgroundCustomSelectText}>SELECT</span>
      </button>
    </li>
  );
};

export default BackgroundCustomItem;
