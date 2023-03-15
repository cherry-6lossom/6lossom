import { useRef } from 'react';
import { Link } from 'react-router-dom';

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
        <button secondary onClick={handleSignOut}>
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div className={style.SignInPage}>
      <h2>로그인 페이지</h2>

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

        <div className={style.group}>
          <button type="submit" disabled={isLoadingSignIn}>
            {!isLoadingSignIn ? '로그인' : '로그인 중...'}
          </button>
        </div>
      </form>

      <p>
        가입된 계정이 없다면 <Link to="/signup">회원가입</Link> 먼저 해야
        합니다.
      </p>
      <p>
        <Link to="/">처음화면으로 이동</Link>
      </p>
    </div>
  );
}
