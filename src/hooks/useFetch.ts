import { useEffect, useState } from 'react';

const useFetch = <T>(url : string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((json : T) => {
        setData(json);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        setError('oh shit!!');
      });
    setLoading(false);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
