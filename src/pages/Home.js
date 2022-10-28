import React from 'react';
import TabButton from '../components/base/TabButton';
import LostPost from '../components/lostPostTab/LostPost';

function Home() {
  return (
    <>
      <div className="text-xl font-medium text-center pb-5">
        잃어버린 반려견을 등록하시면 AI로 닮은 보호소 공고를 찾아드릴게요!
      </div>
      <TabButton />
      <LostPost />
    </>
  );
}

export default Home;
