import { useRef } from 'react';

export const useIsFirstRender = (): boolean => {
  const isFirst = useRef<boolean>(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
};

export default useIsFirstRender;
