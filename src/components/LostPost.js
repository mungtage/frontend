import React from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';

function LostPost() {
  return (
    <>
      <button type="button" className="btn-tab ">
        <Link to="/">실종 등록</Link>
      </button>
      <button type="button" className="btn-tab">
        <Link to="/results">매칭 결과</Link>
      </button>
      <div className="flex justify-center p-20 h-[85vh]">
        <div className=" w-[50%] px-2">
          <ImageUpload />
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
    </>
  );
}

export default LostPost;
