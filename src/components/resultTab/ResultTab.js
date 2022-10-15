/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import MatchResult from './MatchResult';
import NoResult from './NoResult';
import NoPost from './NoPost';

function ResultTab() {
  function resultContent(matchState) {
    if (matchState === 'matchResult') {
      return <MatchResult />;
    }
    if (matchState === 'noResult') {
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

      {resultContent('matchResult')}
    </>
  );
}

export default ResultTab;
