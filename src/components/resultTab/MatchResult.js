import React from 'react';
import PropTypes from 'prop-types';
import RenderList from './RenderList';

function MatchResult({ result, lost }) {
  return (
    <div className="flex flex-col items-center">
      <div className="p-10 text-lg">
        {lost.animalName}(이)와 가장 닮은 아이들입니다.
      </div>
      <main className="w-screen mx-auto my-0 text-[0px]">
        <RenderList list={result} key={result.desertionNo} />
      </main>
    </div>
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
