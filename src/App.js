import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ResultTab from './components/resultTab/ResultTab';
import Home from './pages/Home';
import ResultDetail from './pages/ResultDetail';
import AuthCallback from './components/AuthCallback';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/frontend" element={<Home />} />
          <Route path="/frontend/results" element={<ResultTab />} />
          <Route path="/frontend/rescue/:noticeId" element={<ResultDetail />} />
          <Route path="/frontend/auth" element={<AuthCallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
