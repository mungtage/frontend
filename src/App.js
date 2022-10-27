import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/base/Header';
import MatchResult from './pages/MatchResult';
import Home from './pages/Home';
import ResultDetail from './pages/ResultDetail';
import Auth from './pages/Auth';

function App() {
  const homeRouter = process.env.PUBLIC_URL;
  return (
    <div className="App bg-background h-screen">
      <BrowserRouter>
        <Header />
        <div id="container" className="container mx-auto px-[20px]">
          <Routes>
            <Route path={homeRouter} element={<Home />} />
            <Route path={`${homeRouter}/results`} element={<MatchResult />} />
            <Route
              path={`${homeRouter}/rescue/:desertionNo`}
              element={<ResultDetail />}
            />
            <Route path={`${homeRouter}/auth`} element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
