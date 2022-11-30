import { useEffect, useState } from 'react';

export const useGeolocation = (): {
  position: GeolocationPosition | null;
  error: string;
} => {
  // store error message in state
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState('');

  const handleSuccess = (position: GeolocationPosition) => {
    setPosition(position);
  };

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { position, error };
};

export default useGeolocation;
