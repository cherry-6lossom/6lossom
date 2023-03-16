import { useParams } from 'react-router-dom';

const ShareTreePage = () => {
  const { uid } = useParams();
  console.log(uid);

  return <div>공유 트리 페이지</div>;
};

export default ShareTreePage;
