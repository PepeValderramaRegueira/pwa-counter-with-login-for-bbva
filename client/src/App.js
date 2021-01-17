import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoggedInRoutes, LoggedOutRoutes } from './routes';
import { checkSession } from 'store/actions/user-actions';
import { AppContainer } from 'components';

const App = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, []);

  return (
    <AppContainer>
      {user.isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </AppContainer>
  );
}

export default App;
