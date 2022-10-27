import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import LostForm from './LostForm';

function LostPost() {
  const [imageURL, setImageURL] = useState('');
  const handleImageURL = (url) => {
    setImageURL(url);
  };

  return (
    <div>
      <div className="flex h-[60vh] div-folder">
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
