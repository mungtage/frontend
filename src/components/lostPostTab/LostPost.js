import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';
import LostForm from './LostForm';

function LostPost() {
  const [imageURL, setImageURL] = useState('');
  const [lostPosts, setLostPosts] = useState([]);
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
      setLostPosts(response.data.pop());
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
    <div className="mt-[50px] pb-[100px]">
      <div className="flex h-[100%] div-folder">
        <div className="flex w-[50%] pr-[20px]">
          <ImageUpload onImageURL={handleImageURL} />
        </div>
        <div className="flex w-[50%] pl-[20px]">
          <LostForm imageURL={imageURL} formData={lostPosts} />
        </div>
      </div>
    </div>
  );
}

export default LostPost;
