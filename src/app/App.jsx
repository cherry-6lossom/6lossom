import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';
import ShareTreePage from '@/pages/ShareTreePage/ShareTreePage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/make-tree" element={<MakeTreePage />} />
          <Route path="/share-tree/:uid" element={<ShareTreePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
