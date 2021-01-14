import { useState } from 'react';
import { LoggedInRoutes, LoggedOutRoutes } from './routes';

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <div>
      {user ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </div>
  );
}

export default App;
