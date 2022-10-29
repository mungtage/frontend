import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import RenderList from './RenderList';

function MatchResult({ result, lost }) {
  const accessToken = window.localStorage.getItem('token');
  const [pageNum, setPageNum] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [results, setResults] = useState([...result]);
  const navigate = useNavigate();

  const loadMore = () => {
    if (pageNum >= maxPage) {
      alert('마지막 페이지입니다.');
    }
    setPageNum((prev) => prev + 1);
    const getResult = async (id, pageNumber, loadSize) => {
      try {
        const response = await axios.get(
          `https://mungtage.shop/api/v1/match?lostId=${id}&page=${pageNumber}$size=${loadSize}`,
          {
            headers: {
              Auth: accessToken,
            },
          },
        );
        setResults([...results, ...response.data.data]);
        setMaxPage(response.data.meta.pageCount);
      } catch (e) {
        alert(`통신 오류가 발생했습니다. 다시 시도해주세요: ${e}`);
        navigate('/');
      }
    };
    useEffect(() => {
      getResult(lost.id, pageNum, 9);
    }, [pageNum]);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-lg">
        <span className="font-bold">{lost.animalName}</span>(이)와 가장 닮은
        아이들입니다.
      </div>
      <main className="w-screen mx-auto my-0 text-[0px] flex flex-wrap">
        <RenderList list={result} key={result.desertionNo} />
      </main>
      {pageNum <= maxPage && (
        <button type="button" onClick={loadMore}>
          더 보기
        </button>
      )}
    </div>
  );
}

MatchResult.defaultProps = {
  result: null,
  lost: null,
};
MatchResult.propTypes = {
  result: PropTypes.instanceOf(Array),
  lost: PropTypes.instanceOf(Object),
};

export default MatchResult;
