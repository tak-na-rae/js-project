import React, { useState, useEffect, createContext, useContext } from 'react';
import { API_URL } from '../config/constants';
import axios from 'axios';

const AccessTokenContext = createContext();

export const useAccessToken = () => {
  return useContext(AccessTokenContext);
};

export const isActiveToken = async (accessToken) => {
  try {
    const response = await axios.post(`${API_URL}/auth`, { accessToken });
    const resResult = response.data.result;  // 변수 이름 변경
    if (resResult.id) {
      return { accessResult: true, user_id: resResult.id };
    } else {
      return { accessResult: false };
    }
  } catch (error) {
    console.error("Token verification failed: ", error);
    return { accessResult: false };
  }
}

export const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [accessResult, setAccessResult] = useState(null);
  const [user_id, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      if (accessToken) {
        const result = await isActiveToken(accessToken);
        setAccessResult(result.accessResult);
        setUserId(result.user_id);
      } else {
        setAccessResult(false);
        setUserId(null);
      }
      setLoading(false);
    }
    verifyToken();
  }, [accessToken]);

  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken, accessResult, user_id, loading }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export default AccessTokenContext;