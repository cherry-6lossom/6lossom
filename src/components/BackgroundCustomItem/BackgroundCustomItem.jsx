import style from './BackgroundCustomItem.module.scss';

const BackgroundCustomItem = ({ smallSrc, id, handleSelect }) => {
  return (
    <div className={style.backgroundCustomItem}>
      <button
        onClick={handleSelect}
        className={style.backgroundCustomButton}
        id={id}
        type={'button'}
      >
        <img src={smallSrc} alt={`배경${id}`} />
        <span className={style.backgroundCustomSelectText}>SELECT</span>
      </button>
    </div>
  );
};

export default BackgroundCustomItem;
