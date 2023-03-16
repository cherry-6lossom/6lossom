import style from './SignUpPage.module.scss';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSignUp } from '@/firebase/auth/useSignUp';
import { useAuthState } from '@/firebase/auth/useAuthState';
import { useSignOut } from '@/firebase/auth/useSignOut';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';

import { FormInput } from '@/components/FormInput/FormInput';
import Notification from '@/components/Notification/Notification';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUpPage() {
  const { isLoading: isLoadingSignUp, signUp } = useSignUp();
  const { signOut } = useSignOut();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState();

  const navigate = useNavigate();

  const formStateRef = useRef(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    // 유효성 검사
    if (!name || name.trim().length < 2 || name.trim().length > 8) {
      e.target.childNodes[0].classList.add(style.submitWrongData);
      setTimeout(() => {
        e.target.childNodes[0].classList.remove(style.submitWrongData);
      }, 2000);
      return;
    }

    if (!password || password.trim().length < 6) {
      e.target.childNodes[1].classList.add(style.submitWrongData);
      setTimeout(() => {
        e.target.childNodes[1].classList.remove(style.submitWrongData);
      }, 2000);
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      e.target.childNodes[1].classList.add(style.submitWrongData);
      setTimeout(() => {
        e.target.childNodes[1].classList.remove(style.submitWrongData);
      }, 2000);
      return;
    }

    const user = await signUp(email, password, name);
    if (!user) {
      e.target.childNodes[2].classList.add(style.submitWrongData);
      setTimeout(() => {
        e.target.childNodes[2].classList.remove(style.submitWrongData);
      }, 2000);
    }

    await createAuthUser(user);
  };

  const handleSignOut = async () => {
    signOut();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

    if (name === 'name' && value.trim().length > 1 && value.trim().length < 9) {
      e.target.nextSibling.classList.add(style.validateNamePassed);
    } else if (
      name === 'name' &&
      (!value || value.trim().length < 2 || value.trim().length > 8)
    ) {
      e.target.nextSibling.classList.remove(style.validateNamePassed);
    }

    if (
      (name === 'password' || name === 'passwordConfirm') &&
      value.trim().length > 5
    ) {
      e.target.nextSibling.classList.add(style.validateNamePassed);
    } else if (
      (name === 'password' || name === 'passwordConfirm') &&
      (!value || value.trim().length < 6)
    ) {
      e.target.nextSibling.classList.remove(style.validateNamePassed);
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
      <div className={style.SignUpPage}>
        <h2>인증 사용자 페이지</h2>
        <li>{user.displayName}</li>
        <li>{user.email}</li>
        <button onClick={handleSignOut}>로그아웃</button>
      </div>
    );
  }

  return (
    <div className={style.signUpPageWrapper}>
      <div className={style.signUpPageContainer}>
        <h2 className={style.signUpPageTitle}>회원가입</h2>
        <form className={style.form} onSubmit={handleSubmit}>
          <Notification
            className={style.submitWrongDataDefault}
            text={'이름을 확인해주세요 !'}
          />
          <Notification
            className={style.submitWrongDataDefault}
            text={'비밀번호를 확인해주세요 !'}
          />
          <Notification
            className={style.submitWrongDataDefault}
            text={'이미 가입된 회원정보입니다 !'}
          />
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
          >
            {!isLoadingSignUp ? '회원가입' : '회원가입 중...'}
          </button>
          <button type="reset" className={style.resetButton}>
            초기화
          </button>
        </form>
        <p className={style.toSignInPageWithDescription}>
          이미 가입한 사용자라면{' '}
          <Link to="/signin" className={style.toSignInPageLink}>
            로그인
          </Link>
          을 해주세요 !
        </p>
        <button
          onClick={() => navigate('/signin')}
          className={style.toSignInPage}
        >
          {`<`}
        </button>
      </div>
    </div>
  );
}
