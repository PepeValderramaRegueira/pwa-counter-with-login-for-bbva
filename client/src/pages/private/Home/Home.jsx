import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/actions/user-actions';
import { Button, Avatar, FlexContainer } from 'components';

const Home = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  
  const handleLogout = () => dispatch(logout(user._id));
  
  return (
    <section>
      <Avatar user={user} />
      <FlexContainer extraClasses='jc-c'>
        <Button onClick={handleLogout} isPrimary>
          Logout
        </Button>
      </FlexContainer>
    </section>
  );
}

export default Home
