import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';
import Home from './pages/home';
import Store from './pages/store';
import About from './pages/about';
import NavLayout from './components/navlayout';
import Team from './pages/team';
import TeamMember from './pages/teamMember';
import TeamNavLayout from './components/teamNavLayout';
import Todolist from './pages/todolist';

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>Errors in app</h1>,
    children: [
      // { path: '*', element: <h1>404</h1> },
      { path: '*', element: <Navigate to="/" /> },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/todo',
        element: <Todolist />,
        errorElement: <h1>Errors in todo</h1>,
      },
      {
        path: '/store',
        element: <Store />,
        errorElement: <h1>Errors in store</h1>,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/team',
        element: <TeamNavLayout />,
        loader: ({ request: { signal } }) => {
          return fetch('https://jsonplaceholder.typicode.com/users', {
            signal,
          });
        },
        children: [
          { index: true, element: <Team /> },
          { path: 'joe', element: <TeamMember name={'Joe'} /> },
          { path: 'ny', element: <TeamMember name={'Ny'} /> },
          {
            path: ':memberId',
            loader: ({ request: { signal }, params }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                {
                  signal,
                }
              ).then((res) => {
                if (res.status === 200) return res.json();
                throw redirect('/team');
              });
            },
            element: <TeamMember />,
          },
        ],
      },
    ],
  },
]);
