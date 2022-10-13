import React from 'react';

function LostForm() {
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
                name="반려 동물 이름"
                // value={animalName}
                type="string"
                // onChange={handleChangeAnimalName}
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
                type="date"
                // value={lostDate}
                // onChange={handleLostDate}
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
                type="text"
                // value={detail}
                // onChange={handleDetail}
                className="text-center rounded-r-lg flex-1 appearance-none border border-black w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-center rounded-lg flex-1 appearance-none border border-black w-full py-3 px-20 bg-white text-black placeholder-black shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
          // onClick={onSubmit}
          // disabled={btnDisabled}
          // className={btnDisabled ? BTN_CLASS_DISABLED : BTN_CLASS}
        >
          {/* {btnText} */}등록
        </button>
      </form>

      {/* <div>이름</div>
    <div>실종 날짜</div>
    <div>특이 사항</div> */}
    </div>
  );
}

export default LostForm;
