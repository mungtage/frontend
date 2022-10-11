import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        {/* <Routes><Route path="" element={} /></Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
