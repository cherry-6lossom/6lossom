import { useRef } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FormInput } from '@/components/FormInput/FormInput';

import style from './SignUpPage.module.scss';
import { useSignUp } from '@/firebase/auth/useSignUp';
import { useAuthState } from '@/firebase/auth/useAuthState';
import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';
import { useSignOut } from '@/firebase/auth/useSignOut';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};
/* Component ---------------------------------------------------------------- */

export default function SignUpPage() {
  const { isLoading: isLoadingSignUp, signUp } = useSignUp();
  const { signOut } = useSignOut();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState();

  const navigate = useNavigate();

  console.log(user);

  /* -------------------------------------------------------------------------- */

  const formStateRef = useRef(initialFormState);

  const handleReset = () => {
    console.log('reset');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    // 유효성 검사
    if (!name || name.trim().length < 2 || name.trim().length > 8) {
      console.error('이름은 2글자 이상 8글자 이하로 입력해야 해요');
      alert('이름은 2글자 이상 8글자 이하로 입력해야 해요!');
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      console.error('입력한 패스워드를 다시 확인하세요.');
      alert('입력한 패스워드를 다시 확인하세요. ');
      return;
    }

    const user = await signUp(email, password, name);
    if (!user) {
      alert('이미 가입한 회원입니다.');
    }
    console.error('이미 가입한 회원입니다.');
    await createAuthUser(user);

    console.log('회원가입 및 users 콜렉션에 user 데이터 생성');
  };

  const handleSignOut = async () => {
    console.log('로그아웃');
    signOut();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    console.log(formStateRef.current);
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

        <form
          className={style.form}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
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
            label="패스워드"
            onChange={handleChangeInput}
          />

          <FormInput
            name="passwordConfirm"
            type="password"
            label="패스워드 확인"
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

// ----------------------------------------------------------------------------------
// ✅ [TODO]
// ----------------------------------------------------------------------------------
// - [x] 회원가입 페이지 컴포넌트 하단에 로그인 페이지로 이동하는 링크를 추가합니다.
// - [x] HTML <a> 요소는 서버에 href 값과 일치하는 경로로 새 페이지 요청합니다.
//       React Router의 <Link /> 컴포넌트를 사용하면 `to` prop에 매칭되는 경로로 페이지를 전환합니다.
// ----------------------------------------------------------------------------------
