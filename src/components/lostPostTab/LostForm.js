/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function LostForm({ imageURL }) {
  const [animalName, setAnimalName] = useState();
  const [lostDate, setLostDate] = useState('');
  const [gender, setGender] = useState('');
  const [neuter, setNeuter] = useState('');
  const navigate = useNavigate();

  const handleChangeAnimalName = ({ target: { value } }) =>
    setAnimalName(value);
  const handleLostDate = ({ target: { value } }) => setLostDate(value);
  const handleGender = ({ target: { value } }) => setGender(value);
  const handleNeuter = ({ target: { value } }) => setNeuter(value);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!animalName || !lostDate || !gender || !neuter) {
      alert('빈칸을 작성해주세요.');
      return;
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Auth: window.localStorage.getItem('token'),
        },
      };

      const data = {
        animalName,
        image: imageURL,
        happenDate: lostDate,
        sexCode: gender,
        neuterYN: neuter,
      };

      await axios.post('https://mungtage.shop/api/v1/lost', data, config);
      alert('분실 등록이 성공적으로 완료되었습니다.');
      navigate(`${process.env.PUBLIC_URL}/results`);
    } catch (error) {
      alert('분실 등록에 문제가 생겼습니다: ', error);
    }
  };

  return (
    <div className="flex justify-center h-full w-full">
      <form className="flex h-full flex-col">
        <div className="h-full w-full space-y-10 mb-20">
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 bg-white border-black text-black shadow-sm text-sm">
                반려 동물 이름
              </span>
              <input
                name="animalName"
                value={animalName || ''}
                type="string"
                onChange={handleChangeAnimalName}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>
          {/* <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Identification
            </h3>
            <ul className="grid md:grid-cols-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    type="radio"
                    id="hosting-small"
                    name="hosting"
                    value="hosting-small"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="hosting-small"
                    className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">수컷</div>
                    </div>
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200  dark:border-gray-600">
                <input
                  type="radio"
                  id="hosting-big"
                  name="hosting"
                  value="hosting-big"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-big"
                  className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">암컷</div>
                  </div>
                </label>
              </li>
              <li className="w-full border-b border-gray-200  dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    type="radio"
                    id="hosting-big2"
                    name="hosting"
                    value="hosting-big"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="hosting-big2"
                    className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">모름</div>
                    </div>
                  </label>
                </div>
              </li>
            </ul>
          </div> */}
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 bg-white border-black text-black shadow-sm text-sm">
                실종 날짜
              </span>

              <input
                type="lostDate"
                name="date"
                value={lostDate || ''}
                onChange={handleLostDate}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
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
                value={gender || ''}
                onChange={handleGender}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
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
                value={neuter || ''}
                onChange={handleNeuter}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <button
                type="submit"
                className="text-center rounded-lg flex-1 appearance-none w-full py-3 px-20 bg-point-color text-white font-bold placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
                onClick={onSubmit}
                // disabled={btnDisabled}
                // className={btnDisabled ? BTN_CLASS_DISABLED : BTN_CLASS}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LostForm;

LostForm.propTypes = {
  imageURL: PropTypes.string.isRequired,
};
