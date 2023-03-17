import blossomTree from '@/assets/main-page/main-tree.png';
import classNames from 'classnames';
import style from './OriginTree.module.scss';

const OriginTree = ({ className }) => {
  return (
    <div className={style.blossomTree}>
      <img
        className={classNames(style.blossomTreeImage, className)}
        src={blossomTree}
        alt="벚꽃나무"
      />
    </div>
  );
};

export default OriginTree;
