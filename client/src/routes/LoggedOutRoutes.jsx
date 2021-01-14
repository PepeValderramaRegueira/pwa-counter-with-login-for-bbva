import Routes from './Routes';
import Login from 'pages/public/Login';

const loggedOutRoutes = [
  { key: 'logged-out-route-login', path: '/login', exact: true, render: () => <Login /> }
];

export const LoggedOutRoutes = () => {
  return (
    <Routes routes={loggedOutRoutes} />
  );
}
