import React from 'react';

function LostPost() {
  return (
    <div className="flex justify-center p-20 h-[85vh]">
      <div className="w-[50%] px-2">
        <div className="h-[60%]">이미지</div>
        <div>이미지 등록</div>
      </div>
      <div className="w-[50%] px-2">
        <div className="h-[80%]">
          <div>이름</div>
          <div>실종 날짜</div>
          <div>특이 사항</div>
        </div>
        <div className="flex justify-end">
          <button type="submit">매칭등록</button>
        </div>
      </div>
    </div>
  );
}

export default LostPost;
