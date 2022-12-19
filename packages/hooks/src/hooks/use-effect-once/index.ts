import { EffectCallback, useEffect } from 'react';

export const useEffectOnce = (effectCallback: EffectCallback): void => {
  useEffect(effectCallback, []);
};

export default useEffectOnce;
