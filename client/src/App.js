import React from 'react';
import { useSelector } from 'react-redux';
import { LoggedInRoutes, LoggedOutRoutes } from './routes';

const App = () => {
  const user = useSelector(({ user }) => user);

  return (
    <div>
      {user.isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </div>
  );
}

export default App;
