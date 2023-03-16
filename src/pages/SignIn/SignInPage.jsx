import style from './SignInPage.module.scss';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSignIn } from '@/firebase/auth/useSignIn';
import { useAuthState } from '@/firebase/auth/useAuthState';
import { useSignOut } from '@/firebase/auth/useSignOut';

import { FormInput } from '@/components/FormInput/FormInput';
import Notification from '@/components/Notification/Notification';

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  const formStateRef = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;
    await signIn(email, password);

    if (!user) {
      e.target.childNodes[0].classList.add(style.submitWrongData);
      setTimeout(() => {
        e.target.childNodes[0].classList.remove(style.submitWrongData);
      }, 2000);
    }
  };

  const handleSignOut = async () => {
    signOut();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

    if (
      name === 'email' &&
      value.includes('@') &&
      value.substring(0, value.lastIndexOf('@')) !== '' &&
      value.substr(value.lastIndexOf('@') + 1) !== ''
    ) {
      e.target.nextSibling.classList.add(style.validatePassed);
    } else if (
      name === 'email' &&
      (!value.includes('@') ||
        value.substring(0, value.lastIndexOf('@')) === '' ||
        value.substr(value.lastIndexOf('@') + 1) === '')
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
    return (
      <div className={style.SignInPage}>
        <h2>인증 사용자 페이지</h2>
        <li>{user.displayName}</li>
        <li>{user.email}</li>
        <button onClick={handleSignOut}>로그아웃</button>
      </div>
    );
  }

  return (
    <div className={style.signInPageWrapper}>
      <div className={style.signInPageContainer}>
        <h2 className={style.signInPageTitle}>로그인</h2>

        <form className={style.form} onSubmit={handleSignIn}>
          <Notification
            className={style.submitWrongDataDefault}
            text={'이메일 또는 비밀번호를 확인해주세요 !'}
          />
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
          >
            {!isLoadingSignIn ? '로그인' : '로그인 중...'}
          </button>
        </form>
        <button
          onClick={() => navigate('/signup')}
          className={style.toSignUpPage}
        >
          회원가입
        </button>
        <p className={style.toSignUpPageWithDescription}>
          가입한 계정이 없다면{' '}
          <Link to="/signup" className={style.toSignUpPageLink}>
            회원가입
          </Link>
          을 해주세요 !
        </p>
        <button onClick={() => navigate('/')} className={style.toHomePage}>
          {`<`}
        </button>
      </div>
    </div>
  );
}
