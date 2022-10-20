import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthCallback() {
  const navigate = useNavigate();
  // const [loginStatus, setloginStatus] = useState(false);
  const code = new URL(window.location.href).searchParams.get('code');
  const getToken = async () => {
    try {
      const response = await axios.get('', code);
      window.localStorage.setItem('token', response.data);
      alert('환영합니다!');
    } catch (error) {
      alert(`로그인에 실패했습니다. 다시 시도해주세요: ${error}`);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  navigate('/', { replace: true });
  return <div>waiting...</div>;
}

export default AuthCallback;
