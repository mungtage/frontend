/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MatchResult from './MatchResult';
import NoResult from './NoResult';
import NoPost from './NoPost';

function ResultTab() {
  const [matchState, setMatchState] = useState('noPost');
  const [matchResult, setMatchResult] = useState();
  const accessToken = window.localStorage.getItem('token');

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
    getLost();
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
