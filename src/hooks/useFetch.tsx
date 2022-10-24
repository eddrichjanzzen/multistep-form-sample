import { useEffect, useState } from 'react';

function useFetch<TData>(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TData>();
  const [error, setError] = useState();

  useEffect(() => {
    // the controller will abort whenever the data changes quickly
    const controller = new AbortController();

    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    // clean up request that cancels the request for us
    return () => {
      // aborts the request everytime the data
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
