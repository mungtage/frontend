/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function IsImageUpload({ imageURL }) {
  return (
    <section className="flex justify-center h-full w-full">
      <div className="flex justify-center h-full w-full items-center">
        <div className="flex justify-center h-full w-full items-center">
          <div className="flex justify-center h-full w-[150%] items-center ">
            <img
              src={imageURL}
              alt="This is what you uploaded."
              className="flex flex-col justify-center items-center w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IsImageUpload;

// IsImageUpload.propTypes = {
//   onImageURL: PropTypes.func.isRequired,
// };
