import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import SignInPage from '@/pages/SignIn/SignInPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/make-tree" element={<MakeTreePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
