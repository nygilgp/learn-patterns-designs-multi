import React from 'react';
import CurrentUserLoader from './components/current-user-loader';
import { UserInfo } from './components/user-info';

export const App = () => {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
};
