import style from './ModalProjectInfo.module.scss';

import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const ModalProjectInfo = ({ handleModal }) => {
  return (
    <>
      <div
        role="alertdialog"
        aria-modal="true"
        className={style.ProjectInfoBackground}
      >
        <figure className={style.ProjectInfoContainer}>
          <A11yHidden as={'figcaption'}>
            벚꽃이 지면은 어떤 서비스 인가요? 벚꽃이 지면은 벚꽃 개화시기에 맞춰
            메세지를 볼 수 있는 롤링페이퍼 서비스입니다. 자세한 오픈일정은
            사이드바를 통해 확인하실수 있어요! 벚꽃이 지면을 통해 전하지 못한
            마음을 전해보세요! 롤링페이퍼란 무엇인가요? 특정 사람에 대해 어떤
            주제를 중심으로 주변 사람들이 의견을 적어 놓은 것을 말해요! 이용
            방법은 어떻게 되나요? 첫 번째로, 내 벚꽃나무를 만들고 SNS에 링크를
            공유해요. 두 번째로, 친구들이 내 벚꽃나무에 벚꽃을 달아줄 수 있어요.
            세 번째로, 벚꽃 안에는 친구가 보내준 메세지가 들어있어요.
            마지막으로, 모든 편지들은 벚꽃이 질 때 오픈 가능해요! 벚꽃이 지면은
            누가 만들었나요? 벚꽃이 지면은 멋쟁이 사자처럼 프론트 엔드 스쿨 4기
            수강생 네 명이 함께 만든 서비스입니다!
          </A11yHidden>
          <button
            className={style.projectInfoClose}
            type="button"
            aria-label="닫기"
            onClick={handleModal}
          >
            close
          </button>
        </figure>
      </div>
    </>
  );
};

export default ModalProjectInfo;
