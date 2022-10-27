import React from 'react';
import waiting from '../../assets/Waiting dog.json';

function Waiting() {
  return (
    <div className="mx-auto">
      <div className="text-2xl">잠시만 기다려주세요...</div>
      <lottie-player
        src={JSON.stringify(waiting)}
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      />
    </div>
  );
}

export default Waiting;
