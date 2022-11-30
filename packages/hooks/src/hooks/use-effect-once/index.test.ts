import { renderHook } from '@testing-library/react-hooks';
import { useEffectOnce } from '.';

describe('useEffectOnce', () => {
  it('should run callback', () => {
    const { result } = renderHook(useEffectOnce);
    console.log(result);
    expect(result).toBeTruthy();
  });
});
