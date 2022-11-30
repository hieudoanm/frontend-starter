import { useState, useCallback } from 'react';

export const useToggle = (
  initialState = false
): { flag: boolean; toggle: () => void } => {
  // Initialize the state
  const [flag, setFlag] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(
    () => setFlag((previous: boolean) => !previous),
    []
  );

  return { flag, toggle };
};

export default useToggle;
