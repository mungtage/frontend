/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MatchResult from './MatchResult';
import NoResult from './NoResult';
import NoPost from './NoPost';

function ResultTab() {
  const [matchState, setMatchState] = useState('noPost');
  const [matchResult, setMatchResult] = useState();
  const [lost, setLost] = useState();
  const accessToken = window.localStorage.getItem('token');
  const navigate = useNavigate();

  const getResult = async (id) => {
    const response = await axios.get(
      `https://mungtage.shop/api/v1/match?lostId=${id}`,
      {
        headers: {
          Auth: accessToken,
        },
      },
    );
    if (response.data.length === 0) {
      setMatchState('noResult');
    } else {
      setMatchState('matchResult');
      setMatchResult(response.data.matchResults);
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
      setLost(response.data[0]);
      getResult(response.data[0].id);
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
      return <MatchResult result={matchResult} lost={lost} />;
    }
    if (state === 'noResult') {
      return <NoResult />;
    }
    return <NoPost />;
  }
  return (
    <>
      <Link to="/frontend">
        <button type="button" className="btn-tab ">
          실종 등록
        </button>
      </Link>

      <Link to="/frontend/results">
        <button type="button" className="btn-tab">
          매칭 결과
        </button>
      </Link>

      {resultContent(matchState)}
    </>
  );
}

export default ResultTab;
