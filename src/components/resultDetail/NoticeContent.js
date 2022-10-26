/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function NoticeContent() {
  const { desertionNo } = useParams();
  const accessToken = window.localStorage.getItem('token');
  const [notice, setNotice] = useState();
  const getNotice = async () => {
    try {
      const response = await axios.get(
        `https://mungtage.shop/api/v1/rescue?desertionNo=${desertionNo}`,
        {
          headers: {
            Auth: accessToken,
          },
        },
      );
      setNotice(response.data);
    } catch (e) {
      alert(`통신 오류: ${e}`);
    }
  };
  const { userName, userImg } = { userName: '코코', userImg: '#' };
  const matchPercent = 89;

  useEffect(() => {
    getNotice();
  }, [desertionNo]);

  return notice ? (
    <div className="flex flex-col">
      <div className="inline-flex flex-wrap px-4 py-5 sm:px-6 gap-3 items-end">
        <div className="text-3xl font-bold text-gray-800">공고 상세</div>
        <p className="ml-2 max-w-2xl text-sm text-gray-500 ">
          매칭된 동물의 세부사항을 확인할 수 있습니다.
        </p>
      </div>
      <div className="flex flex-row justify-center flex-wrap mx-auto my-0 p-7">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center">
            <img
              src={window.localStorage.getItem('image')}
              alt="user dog"
              className="w-80 h-full object-cover"
            />
            <div>{window.localStorage.getItem('animalName')}</div>
          </div>
          <div className="text-3xl">=</div>
          <img
            src={notice.imageUrl}
            alt="rescued dog"
            className="w-80 h-full object-cover"
          />
        </div>
        <div className="grid content-between p-[2vw] w-full md:w-[50vw]">
          <div className="border-y w-full mb-[5vh]">
            <div className="divide divide-y divide-gray-200">
              <div className="grid-head">
                <div className="grid-content">나이</div>
                <div className="col-span-3">{notice.age}</div>
                <div className="grid-content">성별</div>
                <div className="col-span-3"> {notice.sexCd}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">종</div>
                <div className="col-span-3"> {notice.kindCd}</div>
                <div className="grid-content">몸무게</div>
                <div className="col-span-3"> {notice.weight}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">발견 장소</div>
                <div className="col-span-3"> {notice.happenPlace}</div>
                <div className="grid-content">발견날짜</div>
                <div className="col-span-3"> {notice.happenDt}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">특이 사항</div>
                <div className="col-span-3"> {notice.specialMark}</div>
                <div className="grid-content">현재 상태</div>
                <div className="col-span-3"> {notice.processState}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">공고 시작일</div>
                <div className="col-span-3"> </div>
                <div className="grid-content">공고 종료일</div>
                <div className="col-span-3"> </div>
              </div>
              <div className="grid-head">
                <div className="grid-content">보호소</div>
                <div className="col-span-3"> {notice.careNm}</div>
                <div className="grid-content">보호소 주소</div>
                <div className="col-span-3"> {notice.careAddr}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">보호소 번호</div>
                <div className="col-span-3"> {notice.careTel}</div>
                <div className="grid-content">유기번호</div>
                <div className="col-span-3"> {desertionNo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>waiting..</div>
  );
}

export default NoticeContent;
