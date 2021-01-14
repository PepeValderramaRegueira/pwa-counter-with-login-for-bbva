import Routes from './Routes';
import Home from 'pages/private/Home';

const loggedInRoutes = [
  { key: 'logged-in-route-home', path: '/', exact: true, render: () => <Home /> }
];

export const LoggedInRoutes = () => {
  return (
    <Routes routes={loggedInRoutes} />
  );
}
