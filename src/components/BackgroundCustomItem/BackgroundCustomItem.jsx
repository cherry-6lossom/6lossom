import style from './BackgroundCustomItem.module.scss';

const BackgroundCustomItem = ({ id, smallSrc, handleSelect }) => {
  return (
    <li key={id} className={style.backgroundCustomItem}>
      <button
        onClick={handleSelect}
        className={style.backgroundCustomButton}
        type={'button'}
        id={id}
      >
        <img src={smallSrc} alt={`배경${id}`} />
        <span className={style.backgroundCustomSelectText}>SELECT</span>
      </button>
    </li>
  );
};

export default BackgroundCustomItem;
