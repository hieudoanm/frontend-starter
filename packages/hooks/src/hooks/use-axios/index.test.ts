import { act, renderHook } from '@testing-library/react';
import axios from 'axios';
import { useAxios } from '.';

jest.mock('axios');

describe('useAxios', () => {
  const url = 'https://example.com/';

  it('render once', () => {
    jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({ data: { status: 'success' } });

    const { result } = renderHook(() => useAxios(url));

    act(() => {
      const { current } = result;
      const { data, error, loading } = current;
      expect(data).toEqual(null);
      expect(error).toEqual(null);
      expect(loading).toEqual(true);
    });
  });
});
