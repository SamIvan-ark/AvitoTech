import { useState } from 'react';

const useApi = (method) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (...args) => {
    setError(null);
    setLoading(true);
    try {
      const response = await method(...args);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data, isLoading, error, fetchData,
  };
};

export default useApi;
