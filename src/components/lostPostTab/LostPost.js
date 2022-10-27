import React, { useState } from 'react';
import TabButton from '../base/TabButton';
import ImageUpload from './ImageUpload';
import LostForm from './LostForm';

function LostPost() {
  const [imageURL, setImageURL] = useState('');
  const handleImageURL = (url) => {
    setImageURL(url);
  };

  return (
    <div className="mt-[50px] pb-[100px]">
      <TabButton />
      <div className="flex h-[100%] bg-folder p-[40px] rounded-lg shadow-lg">
        <div className="flex w-[50%] pr-[20px]">
          <ImageUpload onImageURL={handleImageURL} />
        </div>
        <div className="flex w-[50%] pl-[20px]">
          <LostForm imageURL={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default LostPost;
