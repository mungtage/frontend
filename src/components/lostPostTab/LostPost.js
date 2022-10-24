import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import LostForm from './LostForm';

function LostPost() {
  const [imageURL, setImageURL] = useState('');
  const handleImageURL = (url) => {
    setImageURL(url);
  };

  return (
    <>
      <div>
        <Link to="/frontend">
          <button type="button" className="btn-tab ">
            실종 등록
          </button>
        </Link>

        <Link to="/frontend/results">
          <button type="button" className="btn-tab">
            매칭 결과
          </button>
        </Link>
      </div>

      <div className="flex h-[60vh] bg-folder">
        <div className="flex w-[50%] pr-[20px]">
          <ImageUpload onImageURL={handleImageURL} />
        </div>
        <div className="w-[50%] pl-[20px]">
          <LostForm imageURL={imageURL} />
        </div>
      </div>
    </>
  );
}

export default LostPost;
