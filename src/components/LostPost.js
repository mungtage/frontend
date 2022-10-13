import React from 'react';
import ImageUpload from './lostPostTab/ImageUpload';
import LostForm from './lostPostTab/LostForm';

function LostPost() {
  return (
    <div className="flex pt-5 h-[60vh]">
      <div className="flex w-[50%] px-2">
        <ImageUpload />
      </div>
      <div className="w-[50%] px-2">
        <LostForm />
      </div>
    </div>
  );
}

export default LostPost;
