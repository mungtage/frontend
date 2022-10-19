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
  const token = localStorage.getItem('token');
  const ACCESSTOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaGRsMDE1NzVAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjYxNTEyNTYsImV4cCI6MTY2NjE1MTg1Nn0.F-J2wBCWxV2yF_rs0J1mx_bv5-5OjYR5WAG4Zdqe1rA';
  const getResult = async () => {
    const response = await axios.get(`결과 조회 api url`, {
      headers: {
        Auth: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaGRsMDE1NzVAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjYxNTEyNTYsImV4cCI6MTY2NjE1MTg1Nn0.F-J2wBCWxV2yF_rs0J1mx_bv5-5OjYR5WAG4Zdqe1rA',
      },
    });
    if (response.data === null) {
      setMatchState('noResult');
    } else {
      setMatchState('matchResult');
      setMatchResult(response.data);
    }
  };
  const getLost = async () => {
    const response = await axios.get(`https://mungtage.shop/api/v1/lost`, {
      headers: {
        Auth: ACCESSTOKEN,
      },
    });
    console.log(response);
    if (response.data === null) {
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
