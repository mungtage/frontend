import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MatchResult from './MatchResult';
import NoPost from './NoResult';
import NoResult from './NoPost';

function ResultTab() {
  // eslint-disable-next-line no-unused-vars
  const [isThereResult, setIsThereResult] = useState('noResult');
  function resultContent() {
    if (isThereResult === 'noResult') {
      console.log(isThereResult, 'noResult');
      return <NoResult />;
    }
    if (isThereResult === 'noPost') {
      return <NoPost />;
    }
    return <MatchResult />;
  }

  return (
    <>
      <Link to="/">
        <button type="button" className="btn-tab ">
          실종 등록
        </button>
      </Link>

      <Link to="/results">
        <button type="button" className="btn-tab">
          매칭 결과
        </button>
      </Link>

      {resultContent()}
    </>
  );
}

export default ResultTab;
