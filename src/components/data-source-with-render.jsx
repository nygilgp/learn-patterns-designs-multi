import React, { useState, useEffect } from 'react';

export default function DataSourceWithRender({ getData = () => {}, render }) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, []);

  return render(resource);
}
