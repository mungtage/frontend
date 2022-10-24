import React from 'react';
import PropTypes from 'prop-types';
import RenderList from './RenderList';

function MatchResult({ result }) {
  return (
    <>
      <div>ㅇㅇ이와 80% 이상 일치한 공고입니다.</div>
      <main className="w-screen mx-auto my-0 text-[0px]">
        <RenderList list={result} />
      </main>
    </>
  );
}

MatchResult.defaultProps = {
  result: null,
};
MatchResult.propTypes = {
  result: PropTypes.instanceOf(Array),
};

export default MatchResult;
