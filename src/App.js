import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ResultTab from './components/resultTab/ResultTab';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultTab />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
