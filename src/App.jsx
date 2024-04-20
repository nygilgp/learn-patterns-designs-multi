import React from 'react';
import CurrentUserLoader from './components/current-user-loader';
import { UserInfo } from './components/user-info';
import UserLoader from './components/user-loader';
import ResourceLoader from './components/resource-loader';
import { BookInfo } from './components/book-info';
import DataSource from './components/data-source';
import axios from 'axios';
import DataSourceWithRender from './components/data-source-with-render';

async function getDataFromServer(url) {
  const response = await axios.get(url);
  return response.data;
}

const getDataFromLocalStorage = async (key) =>
  (await localStorage.getItem(key)) ?? '';

const Message = ({ msg }) => <h1>{msg}</h1>;

export const App = () => {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer('http://localhost:9090/users/1')}
        render={(resource) => <UserInfo user={resource} />}
      />
      <DataSourceWithRender
        getData={() => getDataFromLocalStorage('test')}
        render={(resource) => <Message msg={resource} />}
      />

      <DataSource
        resourceName="msg"
        getData={() => getDataFromLocalStorage('test')}
      >
        <Message />
      </DataSource>
      <DataSource
        resourceName="user"
        getData={() => getDataFromServer('http://localhost:9090/users/3')}
      >
        <UserInfo />
      </DataSource>
    </>
  );
};
