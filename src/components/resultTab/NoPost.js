import React from 'react';
import { Link } from 'react-router-dom';

function NoPost() {
  return (
    <div>
      <div>실종 등록된 반려동물이 없습니다.</div>
      <Link to="/">실종 등록하러 가기</Link>
    </div>
  );
}

export default NoPost;
