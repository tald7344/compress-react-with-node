import { useState, useEffect } from 'react';

const useFetch = (url, apiKey) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal, headers: { ApiKey: apiKey} })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data from resource');
        }
        return res.json();
      })
      .then(json => {
        setIsPending(false);
        setError(null);
        if (json.products) {
          setData(json.products);
        } else {
          setData(json);        
        }
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetched Aborted');
        } else {
          setIsPending(false);
          setError(error.message);
        }
      });

      return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
