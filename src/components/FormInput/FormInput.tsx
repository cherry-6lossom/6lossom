import style from './FormInput.module.scss';

import React, { useId, useRef, useEffect, useState } from 'react';

import { bool, string } from 'prop-types';

import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

interface FormInputProp {
  name?: string;
  label: string;
  type?: 'text' | 'button' | 'email' | 'password' | undefined;
  invisibleLabel?: boolean;
  vertical?: boolean;
  [propName: string]: any;
}

export function FormInput({
  name,
  label,
  type,
  invisibleLabel,
  vertical,
  ...restProps
}: FormInputProp) {
  const [visible, setVisible] = useState(false);
  const [passwordType, setPasswordType] = useState(type);

  const inputRef = useRef(null);

  const id = useId();

  useEffect(() => {
    const input = inputRef.current as HTMLInputElement | null;
    const component = input?.parentElement;

    input?.addEventListener('blur', (e) => {
      if ((e.target as HTMLInputElement).value.length > 0) {
        component?.classList.add(style.inputed);
      } else {
        component?.classList.remove(style.inputed);
      }
    });
  }, []);

  const combineClassNames: string = `${style.FormInput} ${
    vertical ? style.FormInputVertical : ''
  }`.trim();

  const handlePasswordVisibility = () => {
    const input = inputRef.current as HTMLInputElement | null;

    if (passwordType === 'text') {
      setPasswordType('password');
    } else if (passwordType === 'password') {
      setPasswordType('text');
    }
    setVisible((visible) => !visible);
    input?.focus();
  };

  return (
    <div className={combineClassNames}>
      {renderLabel(id, label, invisibleLabel)}

      {((name === 'password' || name === 'passwordConfirm') && visible) ||
      ((name === 'password' || name === 'passwordConfirm') && !visible) ? (
        <input
          name={name}
          ref={inputRef}
          id={id}
          type={passwordType}
          className={style.input}
          {...restProps}
        />
      ) : (
        ''
      )}
      {!(name === 'password' || name === 'passwordConfirm') ? (
        <input
          name={name}
          ref={inputRef}
          id={id}
          type={type}
          className={style.input}
          {...restProps}
        />
      ) : (
        ''
      )}

      {name === 'name' ||
      name === 'email' ||
      name === 'password' ||
      name === 'passwordConfirm' ? (
        <div className={style.validate}></div>
      ) : (
        ''
      )}

      {(name === 'password' && visible) ||
      (name === 'passwordConfirm' && visible) ? (
        <button
          type="button"
          className={style.passwordVisible}
          onClick={handlePasswordVisibility}
          aria-label="비밀번호 숨기기"
        ></button>
      ) : (
        ''
      )}
      {(name === 'password' && !visible) ||
      (name === 'passwordConfirm' && !visible) ? (
        <button
          type="button"
          className={style.passwordInvisible}
          onClick={handlePasswordVisibility}
          aria-label="비밀번호 보기"
        ></button>
      ) : (
        ''
      )}
    </div>
  );
}

FormInput.defualtProps = {
  type: 'text',
  invisibleLabel: false,
  vertical: false,
  inputed: false,
};

function renderLabel(
  id: string,
  label: string,
  invisibleLabel: boolean = false
) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id} className={style.label}>
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id} className={style.label}>
      {label}
    </label>
  );
}
