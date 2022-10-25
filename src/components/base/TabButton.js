import React from 'react';
import { Link } from 'react-router-dom';

function TabButton() {
  return (
    <>
      <Link to="/frontend">
        <button
          type="button"
          className="border-x-[15px] border-b-[35px] border-solid	border-x-transparent border-b-[#fcd46c] h-0 w-[120px] ml-7 leading-9"
        >
          실종 등록
        </button>
      </Link>
      <Link to="/frontend/results">
        <button
          type="button"
          className="border-x-[15px] border-b-[35px] border-solid	border-x-transparent border-b-[#fcd46c] h-0 w-[120px] leading-9"
        >
          매칭 결과
        </button>
      </Link>
    </>
  );
}
export default TabButton;
