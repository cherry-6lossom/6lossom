import style from './ProjectInfoButton.module.scss';

import React from 'react';

import { ModalProjectInfoProp } from '@/components/ModalProjectInfo/ModalProjectInfo';

const ProjectInfoButton = ({ handleModal }:ModalProjectInfoProp) => {
  return (
    <>
      <button
        onClick={handleModal}
        className={style.clickMe}
        type="button"
        aria-label="프로젝트 설명서"
      >
        <span className={style.clickMeText}>click me!</span>
      </button>
    </>
  );
};

export default ProjectInfoButton;
