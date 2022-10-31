/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Alert from '../base/Alert';

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
  const handleLogin = () => {
    const accessToken = window.localStorage.getItem('token');
    if (!accessToken) {
      Alert('로그인이 필요합니다.');
      const redirectUrl = `${window.location.origin}/auth`;
      window.location.replace(
        `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=456564400960-m9gm7l9iac36lbnqcvpvkn29s2nluklm.apps.googleusercontent.com&scope=profile%20email&state=7rDIGTpshm6-oFYGiwzrbeVEJyj488QwXKRLTrAB-78%3D&redirect_uri=${redirectUrl}&flowName=GeneralOAuthFlow`,
      );
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!animalName || !lostDate || !gender || !neuter) {
      Alert('warning', '빈칸을 작성해주세요.');
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
      Alert('success', '분실 등록이 성공적으로 완료되었습니다.');
      navigate(`/results`);
    } catch (error) {
      Alert('fail', `분실 등록에 문제가 생겼습니다: ${error}`);
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
                value={animalName || ''}
                type="string"
                onChange={handleChangeAnimalName}
                onClick={handleLogin}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
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
                value={lostDate || ''}
                onChange={handleLostDate}
                onClick={handleLogin}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex ">
            <span className="w-1/3 rounded-l-md inline-flex items-center px-5 bg-white text-black shadow-sm text-sm border-r border-gray-100">
              성별
            </span>
            <ul className="grid md:grid-cols-3 items-center w-2/3 text-sm text-gray-900 rounded-r-lg">
              <li>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="gender-male"
                    name="gender"
                    value="M"
                    className="hidden peer"
                    onChange={handleGender}
                    onClick={handleLogin}
                    required
                  />
                  <label
                    htmlFor="gender-male"
                    className="inline-flex justify-center items-center p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                  >
                    <div className="block">
                      <div className="w-full text-sm ">수컷</div>
                    </div>
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="gender-female"
                    name="gender"
                    value="F"
                    className="hidden peer"
                    onChange={handleGender}
                    onClick={handleLogin}
                    required
                  />
                  <label
                    htmlFor="gender-female"
                    className="inline-flex justify-center items-center p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                  >
                    <div className="block">
                      <div className="w-full text-sm ">암컷</div>
                    </div>
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="gender-unknown"
                    name="gender"
                    value="Q"
                    className="hidden peer"
                    onChange={handleGender}
                    onClick={handleLogin}
                    required
                  />
                  <label
                    htmlFor="gender-unknown"
                    className="inline-flex justify-center items-center rounded-r-lg p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                  >
                    <div className="block">
                      <div className="w-full text-sm">미상</div>
                    </div>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex ">
            <span className="w-1/3 rounded-l-md inline-flex items-center px-5 bg-white text-black shadow-sm text-sm border-r border-gray-100">
              중성화
            </span>
            <ul className="grid md:grid-cols-3 items-center w-2/3 text-sm text-gray-900 rounded-r-lg">
              <li>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="neuter-yes"
                    name="neuter"
                    value="Y"
                    className="hidden peer"
                    onChange={handleNeuter}
                    onClick={handleLogin}
                    required
                  />
                  <label
                    htmlFor="neuter-yes"
                    className="inline-flex justify-center items-center p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                  >
                    <div className="block">
                      <div className="w-full text-sm ">예</div>
                    </div>
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="neuter-no"
                    name="neuter"
                    value="N"
                    className="hidden peer"
                    onChange={handleNeuter}
                    onClick={handleLogin}
                    required
                  />
                  <label
                    htmlFor="neuter-no"
                    className="inline-flex justify-center items-center p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                  >
                    <div className="block">
                      <div className="w-full text-sm ">아니오</div>
                    </div>
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="neuter-unknown"
                    name="neuter"
                    value="U"
                    className="hidden peer"
                    onChange={handleNeuter}
                    onClick={handleLogin}
                    required
                  />
                  <label
                    htmlFor="neuter-unknown"
                    className="inline-flex justify-center items-center rounded-r-lg p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                  >
                    <div className="block">
                      <div className="w-full text-sm">미상</div>
                    </div>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          {/* 
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 bg-white border-black text-black shadow-sm text-sm">
                성별
              </span>
              <input
                type="gender"
                value={gender || ''}
                onChange={handleGender}
                onClick={handleLogin}
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
                onClick={handleLogin}
                className="text-center rounded-r-lg flex-1 appearance-none border-l border-gray-100 w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div> */}

          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <button
                type="submit"
                className="text-center rounded-lg flex-1 appearance-none w-full py-3 px-20 bg-sub-color text-white font-bold placeholder-black shadow-sm text-lg focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
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
