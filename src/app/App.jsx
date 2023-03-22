import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import MessageInputContainer from '@/components/MessageInputContainer/MessageInputContainer';
import MakeTreePage from '@/pages/MakeTreePage/MakeTreePage';
import WriteMessagePage from '@/pages/WriteMessagePage/WriteMessagePage';
import LongButton from '@/components/LongButton/LongButton';
import ModalEnroll from './../components/ModalEnroll/ModalEnroll';
import ModalButton from '@/components/ModalButton/ModalButton';
import ModalButtonList from '@/components/ModalButtonList/ModalButtonList';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/make-tree" element={<MakeTreePage />} />
          <Route path="/write-message-page" element={<WriteMessagePage />} />
        </Routes>
      </BrowserRouter> */}
      {/* <ModalEnroll /> */}
      {/* <ModalButtonList /> */}
      <ModalButton />
    </div>
  );
}

export default App;
