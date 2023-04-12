import style from './SignUpPage.module.scss';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSignUp } from '@/firebase/auth/useSignUp';
import { useAuthState } from '@/firebase/auth/useAuthState';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';

import { FormInput } from '@/components/FormInput/FormInput';
import Notification from '@/components/Notification/Notification';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUpPage() {
  const [renderNameNotification, setRenderNameNotification] = useState(false);
  const [renderEmailNotification, setRenderEmailNotification] = useState(false);
  const [renderPasswordNotification, setRenderPasswordNotification] =
    useState(false);
  const [renderUserNotification, setRenderUserNotification] = useState(false);
  const [notificationAriaLive, setNotificationAriaLive] = useState('off');
  const [notificationRole, setNotificationRole] = useState();

  const formStateRef = useRef(initialFormState);
  const notificationRef = useRef([]);

  const navigate = useNavigate();

  const { isLoading: isLoadingSignUp, signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState();

  if (isLoading) {
    return <div role="alert">페이지를 준비 중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  if (user) {
    localStorage.setItem('uid', JSON.stringify(user.uid));
    navigate('/make-tree');
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    await setRenderNameNotification(true);
    const notificationName = notificationRef.current[0];
    const { name, email, password, passwordConfirm } = formStateRef.current;

    if (!name || name.trim().length < 2 || name.trim().length > 8) {
      notificationName.classList.add(style.animateNotification);
      setNotificationRole('alert');
      setNotificationAriaLive('assertive');
      setTimeout(() => {
        notificationName.classList.remove(style.animateNotification);
        setNotificationRole();
        setNotificationAriaLive('off');
        setRenderNameNotification(false);
      }, 2000);
      return;
    }

    setRenderNameNotification(false);
    await setRenderEmailNotification(true);
    const notificationEmail = notificationRef.current[1];

    if (
      !email ||
      !email.includes('@') ||
      email.substring(0, email.indexOf('@')) === '' ||
      email.substring(email.indexOf('@') + 1) === '' ||
      !email.substring(email.indexOf('@') + 1).includes('.') ||
      email.substring(0, email.indexOf('.')) === '' ||
      email.substring(email.indexOf('.') + 1) === '' ||
      email.substring(email.indexOf('.') - 1, email.indexOf('.')) === '@'
    ) {
      notificationEmail.classList.add(style.animateNotification);
      setNotificationRole('alert');
      setNotificationAriaLive('assertive');
      setTimeout(() => {
        notificationEmail.classList.remove(style.animateNotification);
        setNotificationRole();
        setNotificationAriaLive('off');
        setRenderEmailNotification(false);
      }, 2000);
      return;
    }

    setRenderEmailNotification(false);
    await setRenderPasswordNotification(true);
    const notificationPassword = notificationRef.current[2];

    if (!password || password.trim().length < 6) {
      notificationPassword.classList.add(style.animateNotification);
      setNotificationRole('alert');
      setNotificationAriaLive('assertive');
      setTimeout(() => {
        notificationPassword.classList.remove(style.animateNotification);
        setNotificationRole();
        setNotificationAriaLive('off');
        setRenderPasswordNotification(false);
      }, 2000);
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      notificationPassword.classList.add(style.animateNotification);
      setNotificationRole('alert');
      setNotificationAriaLive('assertive');
      setTimeout(() => {
        notificationPassword.classList.remove(style.animateNotification);
        setNotificationRole();
        setNotificationAriaLive('off');
        setRenderPasswordNotification(false);
      }, 2000);
      return;
    }

    setRenderPasswordNotification(false);
    await setRenderUserNotification(true);
    const notificationUser = notificationRef.current[3];

    const user = await signUp(email, password, name);

    if (!user) {
      notificationUser.classList.add(style.animateNotification);
      setNotificationRole('alert');
      setNotificationAriaLive('assertive');
      setTimeout(() => {
        notificationUser.classList.remove(style.animateNotification);
        setNotificationRole();
        setNotificationAriaLive('off');
        setRenderUserNotification(false);
      }, 2000);
    }

    await createAuthUser(user);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

    if (name === 'name' && value.trim().length > 1 && value.trim().length < 9) {
      e.target.nextSibling.classList.add(style.validatePassed);
    } else if (
      name === 'name' &&
      (!value || value.trim().length < 2 || value.trim().length > 8)
    ) {
      e.target.nextSibling.classList.remove(style.validatePassed);
    }

    if (
      name === 'email' &&
      value.includes('@') &&
      value.substring(0, value.indexOf('@')) !== '' &&
      value.substring(value.indexOf('@') + 1) !== '' &&
      value.substring(value.indexOf('@') + 1).includes('.') &&
      value.substring(0, value.indexOf('.')) !== '' &&
      value.substring(value.indexOf('.') + 1) !== '' &&
      value.substring(value.indexOf('.') - 1, value.indexOf('.')) !== '@'
    ) {
      e.target.nextSibling.classList.add(style.validatePassed);
    } else if (
      name === 'email' &&
      (!value.includes('@') ||
        value.substring(0, value.indexOf('@')) === '' ||
        value.substring(value.indexOf('@') + 1) === '' ||
        !value.substring(value.indexOf('@') + 1).includes('.') ||
        value.substring(0, value.indexOf('.')) === '' ||
        value.substring(value.indexOf('.') + 1) === '' ||
        value.substring(value.indexOf('.') - 1, value.indexOf('.')) === '@')
    ) {
      e.target.nextSibling.classList.remove(style.validatePassed);
    }

    if (
      (name === 'password' || name === 'passwordConfirm') &&
      value.trim().length > 5
    ) {
      e.target.nextSibling.classList.add(style.validatePassed);
    } else if (
      (name === 'password' || name === 'passwordConfirm') &&
      (!value || value.trim().length < 6)
    ) {
      e.target.nextSibling.classList.remove(style.validatePassed);
    }
  };

  return (
    <>
      <A11yHidden as={'h1'}>벚꽃이지면</A11yHidden>
      <div className={style.signUpPageWrapper}>
        <div className={style.signUpPageContainer}>
          <h2 className={style.signUpPageTitle}>회원가입</h2>
          <form className={style.form} onSubmit={handleSignUp}>
            {renderNameNotification ? (
              <Notification
                className={style.notificationStyling}
                text={'이름을 확인해주세요 !'}
                notificationRef={(element) =>
                  (notificationRef.current[0] = element)
                }
                notificationRole={notificationRole}
                notificationAriaLive={notificationAriaLive}
              />
            ) : (
              ''
            )}
            {renderEmailNotification ? (
              <Notification
                className={style.notificationStyling}
                text={'이메일 확인해주세요 !'}
                notificationRef={(element) =>
                  (notificationRef.current[1] = element)
                }
                notificationRole={notificationRole}
                notificationAriaLive={notificationAriaLive}
              />
            ) : (
              ''
            )}
            {renderPasswordNotification ? (
              <Notification
                className={style.notificationStyling}
                text={'비밀번호를 확인해주세요 !'}
                notificationRef={(element) =>
                  (notificationRef.current[2] = element)
                }
                notificationRole={notificationRole}
                notificationAriaLive={notificationAriaLive}
              />
            ) : (
              ''
            )}
            {renderUserNotification ? (
              <Notification
                className={style.notificationStyling}
                text={'이미 가입된 회원정보입니다 !'}
                notificationRef={(element) =>
                  (notificationRef.current[3] = element)
                }
                notificationRole={notificationRole}
                notificationAriaLive={notificationAriaLive}
              />
            ) : (
              ''
            )}
            <FormInput name="name" label="이름" onChange={handleChangeInput} />

            <FormInput
              name="email"
              type="email"
              label="이메일"
              onChange={handleChangeInput}
            />

            <FormInput
              name="password"
              type="password"
              label="비밀번호"
              onChange={handleChangeInput}
            />

            <FormInput
              name="passwordConfirm"
              type="password"
              label="비밀번호 확인"
              onChange={handleChangeInput}
            />

            <button
              type="submit"
              disabled={isLoadingSignUp}
              className={style.signUpButton}
              aria-label="회원가입하기"
            >
              {!isLoadingSignUp ? '회원가입' : '회원가입 중...'}
            </button>
            <button
              type="reset"
              className={style.resetButton}
              aria-label="작성 내용 초기화하기"
            >
              초기화
            </button>
          </form>
          <button
            type="button"
            onClick={() => navigate('/signin')}
            className={style.toSignInPage}
            aria-label="이전 페이지로 이동"
          >
            {`<`}
          </button>
        </div>
      </div>
    </>
  );
}
