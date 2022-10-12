import React, { useState } from 'react';
import LostPost from './LostPost';
import MatchResult from './resultTab/MatchResult';

function Tabs() {
  const [isPost, setIsPost] = useState(true);
  function selectHandler(e) {
    if (e.target.id === 'post') {
      setIsPost(true);
    } else {
      setIsPost(false);
    }
  }

  return (
    <>
      <div>
        <button
          type="button"
          className="btn-tab "
          onClick={selectHandler}
          id="post"
        >
          실종 등록
        </button>
        <button
          type="button"
          className="btn-tab"
          onClick={selectHandler}
          id="result"
        >
          매칭 결과
        </button>
      </div>
      {isPost ? <LostPost /> : <MatchResult />}
    </>
  );
}

export default Tabs;
