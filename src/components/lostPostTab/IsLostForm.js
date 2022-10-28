/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';

function IsLostForm({ formData = [] }) {
  const onDelete = async (event) => {
    event.preventDefault();
    const lostId = 0;

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Auth: window.localStorage.getItem('token'),
        },
      };

      await axios.post(
        'https://mungtage.shop/api/v1/lost/delete',
        lostId,
        config,
      );
      alert('분실 삭제가 성공적으로 완료되었습니다.');
    } catch (error) {
      alert('분실 삭제에 문제가 생겼습니다: ', error);
    }
  };

  return (
    <div className="flex justify-center h-full w-full">
      <form className="flex h-full flex-col">
        <div className="h-full w-full space-y-10">
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 bg-white border-black text-black shadow-sm text-sm">
                반려 동물 이름
              </span>
              <input
                name="animalName"
                value={formData.animalName || ''}
                type="string"
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-gray-100 text-gray-400 placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 bg-white border-black text-black shadow-sm text-sm">
                실종 날짜
              </span>

              <input
                type="lostDate"
                name="date"
                value={formData.happenDate || ''}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-gray-100 text-gray-400 placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
                disabled
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 bg-white border-black text-black shadow-sm text-sm">
                성별
              </span>
              <input
                type="gender"
                value={formData.sexCode || ''}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20  bg-gray-100 text-gray-400 placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 bg-white border-black text-black shadow-sm text-sm">
                중성화
              </span>
              <input
                type="neuter"
                value={formData.neuterYN || ''}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-gray-100 text-gray-400 placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <button
                type="submit"
                className="text-center rounded-lg flex-1 appearance-none w-full py-3 px-20 bg-point-color text-white font-bold placeholder-black shadow-sm text-lg focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
                onClick={onDelete}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default IsLostForm;
