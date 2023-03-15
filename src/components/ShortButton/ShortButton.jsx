import style from '@/components/ShortButton/ShortButton.module.scss';

function ShortButton({ text }) {
  return (
    <>
      <button className={style.shortButton}>{text}</button>
    </>
  );
}

export default ShortButton;
