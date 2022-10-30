import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Waiting from './Waiting';
import Alert from './Alert';

function AuthCallback() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const redirectUrl = `${window.location.origin}/auth`;
  const getToken = async () => {
    try {
      const response = await axios.post(`https://mungtage.shop/api/v1/oauth`, {
        code,
        redirectUrl,
      });
      window.localStorage.setItem('token', response.data.jwtToken);
      return;
    } catch (error) {
      Alert('fail', `로그인에 실패했습니다. 다시 시도해주세요: ${error}`);
    } finally {
      navigate('/', { replace: true });
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <div className="div-folder">
      <Waiting />
    </div>
  );
}

export default AuthCallback;
