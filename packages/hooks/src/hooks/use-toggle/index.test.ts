import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '.';

describe('useToggle', () => {
  it('should run callback', () => {
    const { result } = renderHook(useToggle);

    expect(result.current.flag).toBeFalsy();

    act(() => {
      result.current.toggle();
    });

    expect(result.current.flag).toBeTruthy();
  });
});
