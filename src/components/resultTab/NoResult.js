import React from 'react';

function NoResult() {
  return (
    <div className="flex flex-col h-[60vh] items-center justify-center">
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_mroczavb.json"
        background="transparent"
        speed="2"
        style={{ width: '70%', height: '70%' }}
        loop
        autoplay
      />
      <div className="pb-2">
        아직 매치 완료된 공고가 없습니다. 조금만 기다려주세요.
      </div>
      <div className="text-gray-400 text-sm">
        매치 완료시에는 메일로 알림이 전송됩니다.
      </div>
    </div>
  );
}

export default NoResult;
