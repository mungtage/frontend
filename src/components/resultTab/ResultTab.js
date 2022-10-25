/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MatchResult from './MatchResult';
import NoResult from './NoResult';
import NoPost from './NoPost';
import TabButton from '../base/TabButton';

function ResultTab() {
  const [matchState, setMatchState] = useState('noPost');
  const [matchResult, setMatchResult] = useState();
  const accessToken = window.localStorage.getItem('token');
  const navigate = useNavigate();

  const getResult = async () => {
    const response = await axios.get(`매칭 결과 api`, {
      headers: {
        Auth: accessToken,
      },
    });
    console.log(response);
    if (response.data.length === 0) {
      setMatchState('noResult');
    } else {
      setMatchState('matchResult');
      setMatchResult(response.data);
    }
  };
  const getLost = async () => {
    const response = await axios.get(`https://mungtage.shop/api/v1/lost`, {
      headers: {
        Auth: accessToken,
      },
    });
    if (response.data.length === 0) {
      setMatchState('noPost');
    } else {
      getResult();
    }
  };

  useEffect(() => {
    if (accessToken) {
      getLost();
    } else {
      alert('로그인이 필요합니다.');
      navigate('/frontend');
    }
  }, []);

  function resultContent(state) {
    if (state === 'matchResult') {
      return <MatchResult result={matchResult} />;
    }
    if (state === 'noResult') {
      return <NoResult />;
    }
    return <NoPost />;
  }
  return (
    <>
      <TabButton />
      {resultContent(matchState)}
    </>
  );
}

export default ResultTab;
