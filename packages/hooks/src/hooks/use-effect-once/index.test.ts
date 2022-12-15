import { renderHook, act } from '@testing-library/react';
import { useEffectOnce } from '.';

describe('useEffectOnce', () => {
  it('render once', () => {
    const mock = jest.fn();
    renderHook(() => useEffectOnce(mock));
    act(() => {
      expect(mock).toBeCalledTimes(1);
    });
  });
});
