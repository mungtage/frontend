import React from 'react';

function NoResult() {
  return (
    <div className="flex-col p-20">
      <div className="text-lg">
        아직 매치 완료된 공고가 없습니다. 조금만 기다려주세요.
      </div>
      <div className="text-gray-400">
        매치 완료시에는 메일로 알림이 전송됩니다.
      </div>
    </div>
  );
}

export default NoResult;
