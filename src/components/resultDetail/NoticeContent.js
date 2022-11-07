import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Waiting from '../base/Waiting';
import Alert from '../base/Alert';

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
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setNotice(response.data);
    } catch (e) {
      Alert('fail', `통신 오류가 발생했습니다. 다시 시도해주세요: ${e}`);
    }
  };

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
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <img
              src={window.localStorage.getItem('image')}
              alt="user dog"
              className="w-80 h-4/6 object-cover"
            />
            <div className="p-5">
              {window.localStorage.getItem('animalName')}
            </div>
          </div>
          <div className="text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 959.5 959.5"
              style={{ width: '15px', height: '15px', margin: '15px' }}
              xmlSpace="preserve"
            >
              <g>
                <path d="M110,795.65h739.5c60.801,0,110-49.201,110-110c0-60.801-49.199-110-110-110H110c-60.8,0-110,49.199-110,110   C0,746.449,49.2,795.65,110,795.65z" />
                <path d="M110,383.849h739.5c60.801,0,110-49.2,110-110c0-60.8-49.199-110-110-110H110c-60.8,0-110,49.2-110,110   C0,334.649,49.2,383.849,110,383.849z" />
              </g>
            </svg>
          </div>
          <img
            src={notice.imageUrl}
            alt="rescued dog"
            className="w-80 h-4/6 object-cover"
          />
        </div>
        <div className="grid content-between p-[2vw] w-full md:w-[50vw]">
          <div className="border-y w-full mb-[5vh]">
            <div className="divide divide-y divide-gray-200">
              <div className="grid-head">
                <div className="grid-content">나이</div>
                <div className="col-span-3 px-1">{notice.age}</div>
                <div className="grid-content">성별</div>
                <div className="col-span-3 px-1"> {notice.sexCd}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">종</div>
                <div className="col-span-3 px-1"> {notice.kindCd}</div>
                <div className="grid-content">몸무게</div>
                <div className="col-span-3 px-1"> {notice.weight}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">발견 장소</div>
                <div className="col-span-3 px-1"> {notice.happenPlace}</div>
                <div className="grid-content">발견날짜</div>
                <div className="col-span-3 px-1"> {notice.happenDt}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">특이 사항</div>
                <div className="col-span-3 px-1"> {notice.specialMark}</div>
                <div className="grid-content">현재 상태</div>
                <div className="col-span-3 px-1"> {notice.processState}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">공고 시작일</div>
                <div className="col-span-3 px-1">{notice.noticeSdt}</div>
                <div className="grid-content">공고 종료일</div>
                <div className="col-span-3 px-1">{notice.noticeEdt}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">보호소</div>
                <div className="col-span-3 px-1"> {notice.careNm}</div>
                <div className="grid-content">보호소 주소</div>
                <div className="col-span-3 px-1"> {notice.careAddr}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">보호소 번호</div>
                <div className="col-span-3 px-1"> {notice.careTel}</div>
                <div className="grid-content">유기번호</div>
                <div className="col-span-3 px-1"> {desertionNo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Waiting />
  );
}

export default NoticeContent;
