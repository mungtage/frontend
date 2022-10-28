import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';
import IsImageUpload from './IsImageUpload';
import LostForm from './LostForm';
import IsLostForm from './IsLostForm';

function LostPost() {
  const [imageURL, setImageURL] = useState('');
  const [lostPost, setLostPost] = useState();
  const [isPost, setIsPost] = useState();

  const handleImageURL = (url) => {
    setImageURL(url);
  };
  const accessToken = window.localStorage.getItem('token');
  const getLost = async () => {
    try {
      const response = await axios.get(`https://mungtage.shop/api/v1/lost`, {
        headers: {
          Auth: accessToken,
        },
      });
      if (response.data.length) {
        setIsPost(true);
        setLostPost(response.data.pop());
      } else {
        setIsPost(false);
      }
    } catch (e) {
      alert(`통신 오류가 발생했습니다. 다시 시도해주세요: ${e}`);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getLost();
    } else {
      alert('로그인이 필요합니다.');
    }
  }, []);

  return (
    <div className="pb-[100px]">
      <div className="flex h-[100%] div-folder">
        <div className="flex w-[50%] pr-[20px]">
          {isPost ? (
            <IsImageUpload imageURL={lostPost.image} />
          ) : (
            <ImageUpload onImageURL={handleImageURL} />
          )}
        </div>
        <div className="flex w-[50%] pl-[20px]">
          {isPost ? (
            <IsLostForm formData={lostPost} />
          ) : (
            <LostForm imageURL={imageURL} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LostPost;
