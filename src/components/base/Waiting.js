import React from 'react';
import waiting from '../../assets/Waiting dog.json';

function Waiting() {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <div className="text-2xl pb-[20px]">잠시만 기다려주세요...</div>
      <lottie-player
        src={JSON.stringify(waiting)}
        background="transparent"
        speed="1"
        style={{ width: '360px', height: '220px' }}
        loop
        autoplay
      />
    </div>
  );
}

export default Waiting;
