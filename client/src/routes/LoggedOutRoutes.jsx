import Routes from './Routes';
import Login from 'pages/public/Login';

const loggedOutRoutes = [
  { key: 'logged-out-route-default', path: '/', default: true, render: () => <Login /> }
];

export const LoggedOutRoutes = () => {
  return (
    <Routes routes={loggedOutRoutes} />
  );
}
