import { useCreateAuthUser } from '@/firebase/firestore/useCreateAuthUser';
import { signInWithPopup } from 'firebase/auth';
import { auth, useCallCollection } from '@/firebase/app';
import classNames from 'classnames';
import { useReadData } from '@/firebase/firestore/useReadData';
import { useNavigate } from 'react-router-dom';

const LoginButton = ({ provider, text, className, style }) => {
  const { createAuthUser, isLoading, error } = useCreateAuthUser('users');
  const { readData, data } = useReadData('users');
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const { user } = await signInWithPopup(auth, provider);
    const { uid } = user;
    useCallCollection().then((userList) => {
      userList.map((user) => {
        if (user.uid === uid) {
          localStorage.setItem(
            'userNickname',
            JSON.stringify(user.userNickname)
          );
      }
      });
    });

    localStorage.setItem('uid', JSON.stringify(uid));

    await createAuthUser(user);
    await readData(uid);

    navigate('/make-tree');
  };

  return (
    <>
      <button
        className={classNames(style.loginButton, className)}
        onClick={handleLoginClick}
      >
        {text}
      </button>
    </>
  );
};

export default LoginButton;
