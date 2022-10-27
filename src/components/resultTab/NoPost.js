import React from 'react';
import { Link } from 'react-router-dom';
import curious from '../../assets/Curious dog.json';

function NoPost() {
  return (
    <div className="flex flex-col h-[60vh] items-center justify-center">
      <div className="text-2xl">실종 등록된 반려동물이 없습니다.</div>
      <lottie-player
        src={JSON.stringify(curious)}
        background="transparent"
        speed="1.5"
        style={{ width: '50%', height: '50%' }}
        loop
        autoplay
      />
      <Link to={process.env.PUBLIC_URL}>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#ffa000] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          실종 등록하러 가기
        </button>
      </Link>
    </div>
  );
}

export default NoPost;
