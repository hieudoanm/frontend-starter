import { renderHook, act } from '@testing-library/react';
import { useWindowSize } from '.';

describe('useWindowSize', () => {
  it('get window size', () => {
    const { result } = renderHook(() => useWindowSize());
    act(() => {
      expect(result).toEqual({ current: { height: 768, width: 1024 } });
    });
  });
});
