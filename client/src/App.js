import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoggedInRoutes, LoggedOutRoutes } from './routes';
import { login } from './store/actions/user-actions';

const App = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login({
      isLoggedIn: true
    }));
  }, []);

  return (
    <div>
      {user.isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </div>
  );
}

export default App;
