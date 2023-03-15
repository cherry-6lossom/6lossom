import style from './BackgroundCustomItem.module.scss';

const BackgroundCustomItem = ({ src, id, handleSelect }) => {
  return (
    <div className={style.backgroundCustomItem}>
      <button
        onClick={handleSelect}
        className={style.backgroundCustomButton}
        id={id}
      >
        <img src={src} alt={`배경${id}`} />
      </button>
      <span className={style.backgroundCustomSelectText}>SELECT</span>
    </div>
  );
};

export default BackgroundCustomItem;
