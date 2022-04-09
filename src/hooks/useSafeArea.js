import { useMemo } from 'react';

const getProperty = (property) =>
  getComputedStyle(document.documentElement).getPropertyValue(property);

export const useSafeArea = () => {
  const safeArea = useMemo(
    () => ({
      top: getProperty('--sat'),
      left: getProperty('--sal'),
      right: getProperty('--sar'),
      bottom: getProperty('--sab'),
    }),
    []
  );

  return safeArea;
};

export default useSafeArea;
