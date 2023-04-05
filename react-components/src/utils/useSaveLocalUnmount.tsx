import { useRef, useEffect } from 'react';

const useSaveLocalUnmount = (inputValue: string) => {
  const inputRef = useRef(inputValue);

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', inputRef.current);
    };
  }, []);
};

export default useSaveLocalUnmount;
