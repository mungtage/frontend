/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import PropTypes from 'prop-types';

function ImageUpload({ onImageURL }) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );

      try {
        const formData = new FormData();
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Auth: window.localStorage.getItem('token'),
          },
        };
        formData.append('image', acceptedFiles[0]);

        const response = await axios.post(
          'https://mungtage.shop/api/v1/upload/images',
          formData,
          config,
        );
        onImageURL(response.data);
      } catch (error) {
        alert('이미지 등록에 문제가 생겼습니다: ', error);
      }
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="This is what you uploaded."
          className="flex flex-col justify-center items-center w-full h-[50vh]"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    function revokeURLs() {
      return files.forEach((file) => URL.revokeObjectURL(file.preview));
    }
    return revokeURLs;
  }, []);

  return (
    <section className="dropzone flex justify-center h-full w-full">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="flex justify-center h-full w-full items-center"
      >
        <input {...getInputProps()} />
        {files.length ? (
          thumbs
        ) : (
          <div className="flex justify-center h-full w-full items-center border-2 border-dashed rounded-md border-gray-100">
            <div className="flex justify-center h-full w-[150%] items-center bg-upload-thumb hover:bg-upload-thumb-gif bg-cover bg-center cursor-pointer" />
          </div>
        )}
      </div>
    </section>
  );
}

export default ImageUpload;

ImageUpload.propTypes = {
  onImageURL: PropTypes.func.isRequired,
};
