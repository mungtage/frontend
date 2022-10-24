import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../assets/Logo.svg';

function Header() {
  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('token'),
  );
  const url = window.location.href.split('/');
  let redirectUrl;
  if (url[0] === 'http:') {
    redirectUrl = `${url[0]}//${url[1]}${url[2]}/${url[3]}/auth`;
  } else {
    redirectUrl = `${url[0]}//${url[2]}/${url[3]}/auth`;
  }
  const navigate = useNavigate();
  useEffect(() => {
    setAccessToken(window.localStorage.getItem('token'));
  });

  const logoutHandler = () => {
    window.localStorage.removeItem('token');
    setAccessToken(null);
    alert('로그아웃 되었습니다.');
    navigate('/frontend');
  };

  return (
    <header>
      <div className="bg-white h-[15vh] flex flex-wrap justify-between sticky px-10 top-0 z-50">
        <Link to="/frontend">
          <div className="flex flex-nowrap justify-start">
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
            {!accessToken ? (
              <a
                href={`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=456564400960-m9gm7l9iac36lbnqcvpvkn29s2nluklm.apps.googleusercontent.com&scope=profile%20email&state=7rDIGTpshm6-oFYGiwzrbeVEJyj488QwXKRLTrAB-78%3D&redirect_uri=${redirectUrl}&flowName=GeneralOAuthFlow`}
              >
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
