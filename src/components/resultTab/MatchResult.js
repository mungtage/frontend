/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import RenderList from './RenderList';
import Waiting from '../base/Waiting';

function MatchResult({ lost }) {
  const accessToken = window.localStorage.getItem('token');
  const [pageNum, setPageNum] = useState(0);
  const maxPage = 11;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loadMore = () => {
    if (pageNum >= maxPage) {
      alert('마지막 페이지입니다.');
    }
    setPageNum((prev) => prev + 1);
  };
  const getResult = async (id, pageNumber, loadSize) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://mungtage.shop/api/v1/match?lostId=${id}&page=${pageNumber}&size=${loadSize}`,
        {
          headers: {
            Auth: accessToken,
          },
        },
      );
      setResults([...results, ...response.data.matchResults]);
    } catch (e) {
      alert(`통신 오류가 발생했습니다. 다시 시도해주세요: ${e}`);
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log('pageNum: ', pageNum);
    getResult(34, pageNum, 9);
    // getResult(lost.id, pageNum, 9);
  }, [pageNum]);

  console.log(results);
  return (
    <div className="flex flex-col items-center">
      <div className="text-lg mb-8">
        <span className="font-bold">{lost.animalName}</span>(이)와 가장 닮은
        아이들입니다.
      </div>
      {!isLoading ? (
        <>
          <main className="w-[inherit] mx-auto my-0 text-[0px] flex flex-wrap justify-center">
            <RenderList list={results} key={results.rank} />
          </main>
          {pageNum <= maxPage && (
            <button
              type="button"
              onClick={loadMore}
              className="text-center rounded-lg flex-1 appearance-none px-4 py-2 m-4 bg-folder-disabled-tab font-bold placeholder-black shadow-sm text-lg focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
            >
              더 보기
            </button>
          )}
        </>
      ) : (
        <Waiting />
      )}
    </div>
  );
}

MatchResult.defaultProps = {
  lost: null,
};
MatchResult.propTypes = {
  lost: PropTypes.instanceOf(Object),
};

export default MatchResult;
