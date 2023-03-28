import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage/HomePage';
import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import SignInPage from '@/pages/SignIn/SignInPage';
import ShareTreePage from '@/pages/ShareTreePage/ShareTreePage';
import MessageCustomPage from '@/pages/MessageCustomPage/MessageCustomPage';
import WriteMessagePage from '@/pages/WriteMessagePage/WriteMessagePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/make-tree" element={<MakeTreePage />} />
          <Route path="/share-tree/:uid" element={<ShareTreePage />} />
          <Route path="/message-custom/:uid" element={<MessageCustomPage />} />
          <Route
            path="/write-message/:uid/:msgId"
            element={<WriteMessagePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
