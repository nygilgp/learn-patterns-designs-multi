// import { useCurrentUser } from './current-user.hook';

import axios from 'axios';
import { useDataSource } from './data-source.hook';

// import { useResource } from './resource.hook';

// import { useUser } from './user.hook';

const fetchFromServer = async (resourceUrl) => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export const UserInfo = ({ userId }) => {
  const user = useDataSource(
    fetchFromServer(`http://localhost:9090/users/${userId}`)
  );
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
