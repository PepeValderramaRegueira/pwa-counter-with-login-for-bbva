import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/actions/user-actions';
import { Button, Title } from 'components';

const Home = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  
  const handleLogout = () => dispatch(logout(user._id));
  
  return (
    <section>
      <Title text='Welcome!' tag='h1' />
      <Button onClick={handleLogout} isPrimary>
        Logout
      </Button>
    </section>
  );
}

export default Home
