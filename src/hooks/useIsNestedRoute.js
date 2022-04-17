import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useIsNestedRoute = () => {
  const location = useLocation();
  const [isNested, setIsNested] = useState(false);

  useEffect(() => {
    const routes = location.pathname.split('/').filter(Boolean);

    setIsNested(routes.length > 1);
  }, [location]);

  return isNested;
};
