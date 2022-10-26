import React from 'react';
import PropTypes from 'prop-types';
import RenderList from './RenderList';

function MatchResult({ result, lost }) {
  return (
    <>
      <div>{lost.animalName}(이)와 80% 이상 일치한 공고입니다.</div>
      <main className="w-screen mx-auto my-0 text-[0px]">
        <RenderList list={result} key={result.desertionNo} />
      </main>
    </>
  );
}

MatchResult.defaultProps = {
  result: null,
  lost: null,
};
MatchResult.propTypes = {
  result: PropTypes.instanceOf(Array),
  lost: PropTypes.instanceOf(Object),
};

export default MatchResult;
