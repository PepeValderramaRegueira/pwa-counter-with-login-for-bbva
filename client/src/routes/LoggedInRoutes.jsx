import Routes from './Routes';
import Home from 'pages/private/Home';

const loggedInRoutes = [
  { key: 'logged-in-route-home', path: '/home', exact: true, render: () => <Home /> },
  { key: 'logged-in-route-default', default: true, render: () => <Home /> },
];

export const LoggedInRoutes = () => {
  return (
    <Routes routes={loggedInRoutes} />
  );
}
