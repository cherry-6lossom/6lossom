import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './SignInPage.module.scss';
import { FormInput } from '@/components/FormInput/FormInput';
import { useSignIn } from '@/firebase/auth/useSignIn';
import { useAuthState } from '@/firebase/auth/useAuthState';
import { useSignOut } from '@/firebase/auth/useSignOut';

/* Component ---------------------------------------------------------------- */

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
    console.log({ email, password });

    await signIn(email, password);
  };

  const handleSignOut = async () => {
    console.log('로그아웃');
    signOut();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
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
          <FormInput
            name="email"
            type="email"
            label="이메일"
            onChange={handleChangeInput}
          />

          <FormInput
            name="password"
            type="password"
            label="패스워드"
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
