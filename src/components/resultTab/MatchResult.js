import React from 'react';
import RenderList from './RenderList';

function MatchResult() {
  const rescueList = [
    { happenDate: 20221012, imgUrl: '#', _id: 2345, careNm: 'ㅇㅇ보호소' },
  ];

  return (
    <>
      <div>ㅇㅇ이와 80% 이상 일치한 공고입니다.</div>
      <main className="w-screen mx-auto my-0 text-[0px]">
        <RenderList list={rescueList} />
      </main>
    </>
  );
}

export default MatchResult;
