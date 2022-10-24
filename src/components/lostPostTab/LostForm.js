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

  console.log(imageURL);
  return (
    <div className="h-full">
      <form className="flex h-full flex-col">
        <div className="h-full w-full space-y-10 mb-20">
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-black text-black shadow-sm text-sm">
                반려 동물 이름
              </span>
              <input
                name="animalName"
                value={animalName || ''}
                type="string"
                onChange={handleChangeAnimalName}
                className="text-center rounded-r-lg flex-1 appearance-none border border-black w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-black text-black shadow-sm text-sm">
                실종 날짜
              </span>

              <input
                type="lostDate"
                name="date"
                value={lostDate || ''}
                onChange={handleLostDate}
                className="text-center rounded-r-lg flex-1 appearance-none border border-black w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-black text-black shadow-sm text-sm">
                성별
              </span>
              <input
                type="gender"
                value={gender || ''}
                onChange={handleGender}
                className="text-center rounded-r-lg flex-1 appearance-none border border-black w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-black text-black shadow-sm text-sm">
                중성화
              </span>
              <input
                type="neuter"
                value={neuter || ''}
                onChange={handleNeuter}
                className="text-center rounded-r-lg flex-1 appearance-none border border-black w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-center rounded-lg flex-1 appearance-none border border-black w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
          onClick={onSubmit}
          // disabled={btnDisabled}
          // className={btnDisabled ? BTN_CLASS_DISABLED : BTN_CLASS}
        >
          등록
        </button>
      </form>
    </div>
  );
}

export default LostForm;

LostForm.propTypes = {
  imageURL: PropTypes.string.isRequired,
};
