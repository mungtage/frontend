/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Waiting from './Waiting';

function AuthCallback() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const url = window.location.href.split('/');
  const redirectUrl = `${url[0]}//${url[2]}/${url[3]}/auth`;
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
  return <Waiting />;
}

export default AuthCallback;
