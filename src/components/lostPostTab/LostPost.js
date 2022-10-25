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
      <div className="flex pt-5 h-[60vh]">
        <div className="flex w-[50%] px-2">
          <ImageUpload onImageURL={handleImageURL} />
        </div>
        <div className="w-[50%] px-2">
          <LostForm imageURL={imageURL} />
        </div>
      </div>
    </>
  );
}

export default LostPost;
