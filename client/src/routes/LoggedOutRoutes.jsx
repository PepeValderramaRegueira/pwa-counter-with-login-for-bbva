import { RouteProps } from 'react-router-dom';
import Routes from './Routes';
import Login from 'pages/public/Login';

const loggedOutRoutes = [
  { path: '/login', exact: true, render: () => <Login /> }
];

export const LoggedOutRoutes = () => {
  return (
    <Routes routes={loggedOutRoutes} />
  );
}
