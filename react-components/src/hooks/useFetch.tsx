import { useState } from 'react';

const useFetching = (callback: () => Promise<void>) => {
  const [loading, setloading] = useState<boolean>();
  const [errorMessage, setError] = useState<string>();

  const fetchApi = async () => {
    try {
      setloading(true);
      await callback();
    } catch (error) {
      const errorMess = error as Error;
      setError(errorMess.message);
    } finally {
      setloading(false);
    }
  };

  return [fetchApi, loading, errorMessage];
};

export default useFetching;
