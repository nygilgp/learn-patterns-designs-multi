import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Store from './pages/store';
import About from './pages/about';
import NavLayout from './components/navlayout';
import Team from './pages/team';
import TeamMember from './pages/teamMember';
import TeamNavLayout from './components/teamNavLayout';

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
        children: [
          { index: true, element: <Team /> },
          { path: 'joe', element: <TeamMember name={'Joe'} /> },
          { path: 'ny', element: <TeamMember name={'Ny'} /> },
          { path: ':memberId', element: <TeamMember /> },
        ],
      },
    ],
  },
]);
