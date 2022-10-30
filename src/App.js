import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/base/Header';
import MatchResult from './pages/MatchResult';
import Home from './pages/Home';
import ResultDetail from './pages/ResultDetail';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App h-[100%]">
      <BrowserRouter>
        <Header />
        <div id="container" className="container mx-auto px-[20px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<MatchResult />} />
            <Route path="/rescue/:desertionNo" element={<ResultDetail />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
