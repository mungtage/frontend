import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthCallback() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const redirectUrl = window.location.href;
  const getToken = async () => {
    try {
      const response = await axios.post(`https://mungtage.shop/api/v1/oauth`, {
        code,
        redirectUrl,
      });
      window.localStorage.setItem('token', response.data.jwtToken);
      alert('환영합니다!');
    } catch (error) {
      alert(`로그인에 실패했습니다. 다시 시도해주세요: ${error}`);
    } finally {
      navigate(process.env.PUBLIC_URL, { replace: true });
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return <div>waiting...</div>;
}

export default AuthCallback;
