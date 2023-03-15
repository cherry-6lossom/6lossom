import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import ModalEnroll from '@/components/ModalEnroll/ModalEnroll';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/make-tree" element={<MakeTreePage />} />
        </Routes>
      </BrowserRouter> */}
      <MessageInputContainer />
      {/* <ModalEnroll /> */}
    </div>
  );
}

export default App;
