import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoggedInRoutes, LoggedOutRoutes } from './routes';
import { checkSession } from 'store/actions/user-actions';

const App = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, []);

  return (
    <div>
      {user.isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </div>
  );
}

export default App;
