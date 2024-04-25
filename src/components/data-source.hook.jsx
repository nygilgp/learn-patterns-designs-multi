import { useEffect } from 'react';
import { useState } from 'react';

export const useDataSource = (getData) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return resource;
};
