import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setloding] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setloding(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setloding(false);
    } catch (e) {
      setError(`${e}. Some Error Occured`);
      setloding(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
}
