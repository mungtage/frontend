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
    <>
      <TabButton />
      <div className="flex h-[60vh] bg-folder p-[40px] rounded-lg shadow-lg">
        <div className="flex w-[50%] pr-[20px]">
          <ImageUpload onImageURL={handleImageURL} />
        </div>
        <div className="flex w-[50%] pl-[20px]">
          <LostForm imageURL={imageURL} />
        </div>
      </div>
    </>
  );
}

export default LostPost;
