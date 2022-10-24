/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/Logo.svg';

function Header() {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('token'),
  );
  useEffect(() => {
    setAccessToken(window.localStorage.getItem('token'));
  });
  const logoutHandler = () => {
    window.localStorage.removeItem('token');
    setAccessToken(null);
  };
  return (
    <header>
      <div className="bg-white h-[15vh] flex justify-between sticky top-0 z-50">
        <Link to="/frontend">
          <div className="flex flex-wrap justify-start">
            <div className="flex pr-2 h-[15vh] items-center">
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

          <div className="flex pl-2 font-bold items-center font-mono text-[#000000] hover:font-black text-xl">
            {!accessToken ? (
              <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=456564400960-m9gm7l9iac36lbnqcvpvkn29s2nluklm.apps.googleusercontent.com&scope=profile%20email&state=7rDIGTpshm6-oFYGiwzrbeVEJyj488QwXKRLTrAB-78%3D&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffrontend%2Fauth&flowName=GeneralOAuthFlow">
                로그인
              </a>
            ) : (
              <button type="button" onClick={logoutHandler}>
                로그아웃
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
