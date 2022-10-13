import React from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import LostForm from './LostForm';

function LostPost() {
  return (
    <>
      <Link to="/">
        <button type="button" className="btn-tab ">
          실종 등록
        </button>
      </Link>

      <Link to="/results">
        <button type="button" className="btn-tab">
          매칭 결과
        </button>
      </Link>

      <div className="flex pt-5 h-[60vh]">
        <div className="flex w-[50%] px-2">
          <ImageUpload />
        </div>
        <div className="w-[50%] px-2">
          <LostForm />
        </div>
      </div>
    </>
  );
}

export default LostPost;
