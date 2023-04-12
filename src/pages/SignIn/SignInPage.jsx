import style from './SignInPage.module.scss';

import { useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSignIn } from '@/firebase/auth/useSignIn';
import { useAuthState } from '@/firebase/auth/useAuthState';

import { FormInput } from '@/components/FormInput/FormInput';
import Notification from '@/components/Notification/Notification';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  const [renderNotification, setRenderNotification] = useState(false);
  const [notificationAriaLive, setNotificationAriaLive] = useState('off');
  const [notificationRole, setNotificationRole] = useState();

  const formStateRef = useRef(initialFormState);
  const notificationRef = useRef();

  const navigate = useNavigate();

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { isLoading, error, user } = useAuthState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    await setRenderNotification(true);

    const { email, password } = formStateRef.current;
    const notification = notificationRef.current;

    await signIn(email, password);

    if (!user) {
      notification.classList.add(style.animateNotification);
      setNotificationRole('alert');
      setNotificationAriaLive('assertive');
      setTimeout(() => {
        notification.classList.remove(style.animateNotification);
        setNotificationRole();
        setNotificationAriaLive('off');
        setRenderNotification(false);
      }, 2000);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

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

    if (name === 'password' && value.trim().length > 5) {
      e.target.nextSibling.classList.add(style.validatePassed);
    } else if (name === 'password' && (!value || value.trim().length < 6)) {
      e.target.nextSibling.classList.remove(style.validatePassed);
    }
  };

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

  return (
    <>
      <A11yHidden as={'h1'}>벚꽃이지면</A11yHidden>
      <div className={style.signInPageWrapper}>
        <div className={style.signInPageContainer}>
          <h2 className={style.signInPageTitle}>로그인</h2>

          <form className={style.form} onSubmit={handleSignIn}>
            {renderNotification ? (
              <Notification
                className={style.notificationStyling}
                text={'이메일 또는 비밀번호를 확인해주세요 !'}
                notificationRef={notificationRef}
                notificationRole={notificationRole}
                notificationAriaLive={notificationAriaLive}
              />
            ) : (
              ''
            )}
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

            <button
              type="submit"
              disabled={isLoadingSignIn}
              className={style.signInButton}
              aria-label="로그인하기"
            >
              {!isLoadingSignIn ? '로그인' : '로그인 중...'}
            </button>
          </form>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className={style.toSignUpPage}
            aria-label="회원가입 페이지로 이동"
          >
            회원가입
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className={style.toHomePage}
            aria-label="이전 페이지로 이동"
          >
            {`<`}
          </button>
        </div>
      </div>
    </>
  );
}
