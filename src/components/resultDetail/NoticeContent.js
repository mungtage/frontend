/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function NoticeContent() {
  const { noticeId } = useParams();
  const {
    id,
    age,
    careAddr,
    careTel,
    orgNm,
    careNm,
    colorCd,
    chargeNm,
    desertionNo,
    happenDt,
    happenPlace,
    img,
    kindCd,
    neuterYN,
    noticeEdt,
    noticeSdt,
    officeTel,
    processState,
    sexCd,
    specialMark,
    weight,
  } = {
    id: 56234,
    age: 2,
    careAddr: '서울시 영등포구',
    careTel: '0243652342',
    orgNm: '기관이름?',
    careNm: '보호소이름',
    colorCd: '흰색',
    chargeNm: '??',
    desertionNo: 39483875,
    happenDt: 20221016,
    happenPlace: '서울시 영등포구',
    img: '#',
    kindCd: '[개]치와와',
    neuterYN: 'Y',
    noticeEdt: 20221022,
    noticeSdt: 20221101,
    officeTel: '0223543452',
    processState: '보호중',
    sexCd: '여',
    specialMark: '점박이',
    weight: 3.5,
  };
  const { userName, userImg } = { userName: '코코', userImg: '#' };
  const matchPercent = 89;

  return (
    <div className="flex flex-col">
      <div className="inline-flex flex-wrap px-4 py-5 sm:px-6 gap-3 items-end">
        <div className="text-3xl font-bold text-gray-800">공고 상세</div>
        <p className="ml-2 max-w-2xl text-sm text-gray-500 ">
          매칭된 동물의 세부사항을 확인할 수 있습니다.
        </p>
      </div>
      <div className="inline-flex flex-wrap justify-center mx-auto my-0 p-7">
        <img src={img} alt="rescued dog" className="w-96 h-full object-cover" />
        <div>{matchPercent}%</div>
        <div className="text-3xl">=</div>
        <img
          src={userImg}
          alt="user dog"
          className="w-96 h-full object-cover"
        />
        <div className="grid content-between p-[2vw] w-full md:w-[50vw]">
          <div className="border-y w-full mb-[5vh]">
            <div className="divide divide-y divide-gray-200">
              <div className="grid-head">
                <div className="grid-content">나이</div>
                <div className="col-span-3">{age}</div>
                <div className="grid-content">색</div>
                <div className="col-span-3"> {colorCd}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">종</div>
                <div className="col-span-3"> {kindCd}</div>
                <div className="grid-content">성별</div>
                <div className="col-span-3"> {sexCd}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">몸무게</div>
                <div className="col-span-3"> {weight}</div>
                <div className="grid-content">유기번호</div>
                <div className="col-span-3"> {desertionNo}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">발견 장소</div>
                <div className="col-span-3"> {happenPlace}</div>
                <div className="grid-content">발견날짜</div>
                <div className="col-span-3"> {happenDt}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">특이 사항</div>
                <div className="col-span-3"> {specialMark}</div>
                <div className="grid-content">현재 상태</div>
                <div className="col-span-3"> {processState}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">공고 시작일</div>
                <div className="col-span-3"> {noticeSdt}</div>
                <div className="grid-content">공고 종료일</div>
                <div className="col-span-3"> {noticeEdt}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">보호소</div>
                <div className="col-span-3"> {careNm}</div>
                <div className="grid-content">보호소 주소</div>
                <div className="col-span-3"> {careAddr}</div>
              </div>
              <div className="grid-head">
                <div className="grid-content">기관이름??</div>
                <div className="col-span-3"> {orgNm}</div>
                <div className="grid-content">보호소 번호</div>
                <div className="col-span-3"> {officeTel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeContent;
