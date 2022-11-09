import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';
import IsImageUpload from './IsImageUpload';
import LostForm from './LostForm';
import IsLostForm from './IsLostForm';
import Alert from '../base/Alert';

function LostPost() {
  const [imageURL, setImageURL] = useState('');
  const [lostPost, setLostPost] = useState();

  const handleImageURL = (url) => {
    setImageURL(url);
  };
  const accessToken = window.localStorage.getItem('token');
  const getLost = async () => {
    try {
      const response = await axios.get(`https://mungtage.shop/api/v1/lost`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.data.length) {
        setLostPost(response.data.pop());
      }
    } catch (error) {
      Alert('fail', `통신 오류가 발생했습니다. 다시 시도해주세요: ${error}`);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getLost();
    }
  }, [lostPost]);

  return (
    <div className="pb-[100px]">
      <div className="flex h-[100%] div-folder">
        <div className="flex w-[50%] pr-[20px]">
          {lostPost ? (
            <IsImageUpload imageURL={lostPost.image} />
          ) : (
            <ImageUpload onImageURL={handleImageURL} />
          )}
        </div>
        <div className="flex w-[50%] pl-[20px]">
          {lostPost ? (
            <IsLostForm formData={lostPost} setLostPost={setLostPost} />
          ) : (
            <LostForm imageURL={imageURL} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LostPost;
