import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/Logo.svg';

function Header() {
  return (
    <header>
      <div className="bg-white h-[15vh] flex justify-between sticky px-10 top-0 z-50">
        <Link to="/frontend">
          <div className="flex flex-wrap justify-start">
            <div className="flex px-2 h-[15vh] items-center">
              <img className="h-[10vh]" src={LOGO} alt="Main LOGO" />
            </div>
            <div className="flex px-2 h-[15vh] items-center">
              <p className="font-bold font-mono text-5xl">멍타주</p>
            </div>
          </div>
        </Link>

        <div className="flex flex-wrap justify-end">
          <div className="flex px-2 font-bold items-center font-mono text-[#000000] hover:font-black text-xl">
            알림
          </div>

          <div className="flex px-2 font-bold items-center font-mono text-[#000000] hover:font-black text-xl">
            <a href="https://mungtage.shop/oauth2/authorization/google">
              로그인
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
