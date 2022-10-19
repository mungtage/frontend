/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MatchResult from './MatchResult';
import NoResult from './NoResult';
import NoPost from './NoPost';

function ResultTab() {
  const [matchState, setMatchState] = useState('noPost');
  const getLost = useCallback(async () => {
    const response = await axios.get(`https://mungtage.shop/api/v1/lost`, {
      headers: {
        Auth: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaGRsMDE1NzVAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjYxNTEyNTYsImV4cCI6MTY2NjE1MTg1Nn0.F-J2wBCWxV2yF_rs0J1mx_bv5-5OjYR5WAG4Zdqe1rA',
        'Content-Type': `application/json`,
      },
    });
    console.log(response);
    setMatchState(response.data);
  });
  useEffect(() => {
    getLost();
  }, []);

  function resultContent(state) {
    if (state === 'matchResult') {
      return <MatchResult />;
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
