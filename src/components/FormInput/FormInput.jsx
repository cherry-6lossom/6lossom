import style from './FormInput.module.scss';
import { useId, useRef, useEffect, useState } from 'react';
import { bool, string } from 'prop-types';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

export function FormInput({
  name,
  label,
  type,
  invisibleLabel,
  vertical,
  ...restProps
}) {
  const id = useId();
  const inputRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [passwordType, setPasswordType] = useState(type);

  const handlePasswordVisibility = () => {
    if (passwordType === 'text') {
      setPasswordType('password');
    } else if (passwordType === 'password') {
      setPasswordType('text');
    }
    setVisible((visible) => !visible);
  };

  useEffect(() => {
    const input = inputRef.current;
    const component = input.parentElement;

    input.addEventListener('blur', (e) => {
      if (e.target.value.length > 0) {
        component.classList.add(style.inputed);
      } else {
        component.classList.remove(style.inputed);
      }
    });
  }, []);

  const combineClassNames = `${style.FormInput} ${
    vertical ? style.FormInputVertical : ''
  }`.trim();
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
        <span className={style.validate}></span>
      ) : (
        ''
      )}

      {(name === 'password' && visible) ||
      (name === 'passwordConfirm' && visible) ? (
        <button
          type="button"
          className={style.passwordVisible}
          onClick={handlePasswordVisibility}
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
        ></button>
      ) : (
        ''
      )}
      <input
        ref={inputRef}
        id={id}
        type={type}
        className={style.input}
        required
        {...restProps}
      />
    </div>
  );
}

FormInput.defualtProps = {
  type: 'text',
  invisibleLabel: false,
  vertical: false,
  inputed: false,
};

FormInput.propTypes = {
  type: string,
  label: string.isRequired,
  invisibleLabel: bool,
  vertical: bool,
  inputed: bool,
};

function renderLabel(id, label, invisibleLabel) {
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
