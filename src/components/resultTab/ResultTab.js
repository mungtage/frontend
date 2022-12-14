import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MatchResult from './MatchResult';
import NoResult from './NoResult';
import NoPost from './NoPost';
import Waiting from '../base/Waiting';
import Alert from '../base/Alert';

function ResultTab() {
  const [matchState, setMatchState] = useState('waiting');
  const [lost, setLost] = useState();
  const accessToken = window.localStorage.getItem('token');
  const navigate = useNavigate();

  const getResult = async (id, pageNum, loadSize) => {
    try {
      const response = await axios.get(
        `https://mungtage.shop/api/v1/match?lostId=${id}&page=${pageNum}&size=${loadSize}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (response.data.matchResults.length === 0) {
        setMatchState('noResult');
      } else {
        setMatchState('matchResult');
      }
    } catch (e) {
      Alert('fail', `통신 오류가 발생했습니다. 다시 시도해주세요: ${e}`);
      navigate('/');
    }
  };
  const getLost = async () => {
    try {
      const response = await axios.get(`https://mungtage.shop/api/v1/lost`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.data.length === 0) {
        setMatchState('noPost');
        window.localStorage.removeItem('animalName');
        window.localStorage.removeItem('image');
      } else {
        setLost(response.data[0]);
        window.localStorage.setItem('animalName', response.data[0].animalName);
        window.localStorage.setItem('image', response.data[0].image);
        getResult(response.data[0].id, 0, 9);
      }
    } catch (e) {
      Alert('fail', `통신 오류가 발생했습니다. 다시 시도해주세요: ${e}`);
      navigate('/');
    }
  };

  useEffect(() => {
    if (accessToken) {
      getLost();
    } else {
      Alert('warning', '로그인이 필요합니다.');
      navigate('/');
    }
  }, []);

  function resultContent(state) {
    if (state === 'matchResult') {
      return <MatchResult lost={lost} />;
    }
    if (state === 'noResult') {
      return <NoResult />;
    }
    if (state === 'waiting') {
      return <Waiting />;
    }
    return <NoPost />;
  }
  return (
    <div className="div-folder mb-[100px]">{resultContent(matchState)}</div>
  );
}

export default ResultTab;
