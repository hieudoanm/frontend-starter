import { DependencyList, EffectCallback, useEffect } from 'react';

import { useIsFirstRender } from '../use-is-first-render';

export const useUpdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList
): void => {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
