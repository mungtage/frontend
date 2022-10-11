import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from './datadog.svg';

function Header() {
  return (
    <header>
      <div className="bg-white h-[15vh] flex justify-between sticky px-10 top-0 z-50">
        <div className="flex px-2 h-[15vh] items-center">
          <Link to="/">
            <img className="h-[10vh]" src={LOGO} alt="Main LOGO" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-end">
          <div className="flex px-2 font-bold items-center font-mono text-[#000000] hover:font-black">
            Alert
          </div>

          <div className="flex px-2 font-bold items-center font-mono text-[#000000] hover:font-black">
            Login
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
