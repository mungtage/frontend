import React from 'react';
import { Link } from 'react-router-dom';

function TabButton() {
  const position = window.location.href.split('/')[4];
  return (
    <>
      <Link to={process.env.PUBLIC_URL}>
        <button
          type="button"
          className={`font-sans border-x-[15px] border-b-[35px] border-solid	border-x-transparent border-b-[#fcd46c] rounded-t-3xl h-0 w-[120px] ml-10 leading-9 relative before:content-none before:block before:mt-[-7px] before:h-[15px] before:w-[120px] before:rounded-3xl before:bg-[#fcd46c] ${
            position ? '' : 'z-10'
          }`}
        >
          실종 등록
        </button>
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/results`}>
        <button
          type="button"
          className={`font-sans border-x-[15px] border-b-[35px] border-solid	border-x-transparent border-b-[#dcb48c] rounded-t-3xl h-0 w-[120px]  leading-9 relative before:content-none before:block before:mt-[-7px] before:h-[15px] before:w-[120px] before:rounded-3xl before:bg-[#dcb48c] left-[-12px] ${
            position ? 'z-10' : ''
          }`}
        >
          매칭 결과
        </button>
      </Link>
    </>
  );
}
export default TabButton;
