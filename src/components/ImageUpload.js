/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function ImageUpload() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
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
    <section className="dropzone h-full">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="flex h-full items-center "
      >
        <input {...getInputProps()} />
        {files.length ? (
          thumbs
        ) : (
          <div>
            <p className="text-center pb-3">이곳을 클릭하여</p>
            <p className="text-center pb-3">사진을 선택하거나</p>
            <p className="text-center pb-3"> 사진을 끌어다 놓습니다.</p>
          </div>
        )}
        {/* <div>{thumbs}</div> */}
      </div>
    </section>
  );
}

export default ImageUpload;
