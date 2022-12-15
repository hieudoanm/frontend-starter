import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';

type UseAxios<T> = {
  loading: boolean;
  data: T | null;
  error: AxiosError | null;
};

export const useAxios = <T>(
  url: string,
  configs: AxiosRequestConfig = {}
): UseAxios<T> & { refetch: () => void } => {
  const [state, setState] = useState<UseAxios<T>>({
    loading: false,
    error: null,
    data: null,
  });

  const [refetchIndex, setRefetchIndex] = useState<number>(0);

  const refetch = useCallback(() => setRefetchIndex((prev) => prev + 1), []);

  useEffect(() => {
    const getData = async () => {
      setState({ loading: true, error: null, data: null });
      try {
        const response = await axios.get<T>(url, configs);
        const { data } = response;
        setState({ loading: false, error: null, data });
      } catch (error) {
        setState({ loading: false, error: error as AxiosError, data: null });
      }
    };
    getData();
  }, [refetchIndex]);

  return { ...state, refetch };
};

export default useAxios;
