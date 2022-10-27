import React from 'react';
import { Link } from 'react-router-dom';

function TabButton() {
  const position = window.location.href.split('/')[4];
  return (
    <>
      <Link to={process.env.PUBLIC_URL}>
        <button
          type="button"
          className={`btn-tab ml-10 ${
            position
              ? 'border-b-folder-disabled-tab'
              : 'z-10 font-semibold border-b-yellow '
          }`}
        >
          실종 등록
        </button>
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/results`}>
        <button
          type="button"
          className={`btn-tab left-[-12px] ${
            position
              ? 'z-10 font-semibold border-b-yellow'
              : 'border-b-folder-disabled-tab'
          }`}
        >
          매칭 결과
        </button>
      </Link>
    </>
  );
}
export default TabButton;
