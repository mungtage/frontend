import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MatchResult from './MatchResult';
import NoPost from './NoResult';
import NoResult from './NoPost';

function ResultTab() {
  // eslint-disable-next-line no-unused-vars
  const [isThereResult, setIsThereResult] = useState('matchResult');
  function resultContent() {
    if (isThereResult === 'noResult') {
      return <NoResult />;
    }
    if (isThereResult === 'noPost') {
      return <NoPost />;
    }
    return <MatchResult />;
  }

  return (
    <>
      <button type="button" className="btn-tab ">
        <Link to="/">실종 등록</Link>
      </button>
      <button type="button" className="btn-tab">
        <Link to="/results">매칭 결과</Link>
      </button>
      {resultContent()}
    </>
  );
}

export default ResultTab;
