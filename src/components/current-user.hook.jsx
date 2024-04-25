import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:9090/current-user');
      setUser(response.data);
    })();
  });

  return user;
};
