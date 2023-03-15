import style from '@/components/ShortButton/ShortButton.module.scss';

function ShortButton({ onClick, text }) {
  return (
    <>
      <button onClick={onClick ? onClick : null} className={style.shortButton}>
        {text}
      </button>
    </>
  );
}

export default ShortButton;
