import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/base/Header';
import ResultTab from './components/resultTab/ResultTab';
import Home from './pages/Home';
import ResultDetail from './pages/ResultDetail';
import AuthCallback from './components/base/AuthCallback';

function App() {
  const homeRouter = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={homeRouter} element={<Home />} />
          <Route path={`${homeRouter}/results`} element={<ResultTab />} />
          <Route
            path={`${homeRouter}/rescue/:desertionNo`}
            element={<ResultDetail />}
          />
          <Route path={`${homeRouter}/auth`} element={<AuthCallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
