import { useEffect } from 'react';

const useFetching = (callback) => {
  const [books, setBooks] = useState<ICard[]>();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const fetchApi = async () => {
    try {
      setLoading(true);
      await callback();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetchApi, isLoading, error];
};

export default useFetching;
