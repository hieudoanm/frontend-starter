import { useState, useCallback, useEffect } from 'react';

// Hook
export const useAsync = <T>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [response, setValue] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  // The execute function wraps asyncFunction and
  // handles setting state for loading, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('loading');
    setValue(null);
    setError(null);
    return asyncFunction()
      .then((asyncResponse: T) => {
        setValue(asyncResponse);
        setStatus('success');
      })
      .catch((error: Error) => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, response, error };
};

export default useAsync;
