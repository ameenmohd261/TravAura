import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (fetchUrl = url, fetchOptions = options) => {
    setLoading(true);
    try {
      const response = await fetch(fetchUrl, fetchOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || 'Something went wrong');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    // Only fetch on component mount if url is provided and autoFetch isn't false
    if (url && options.autoFetch !== false) {
      fetchData();
    }
  }, [url, options.autoFetch, fetchData]);

  const refetch = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch, fetchData };
};

export default useFetch;