import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/actions/user-actions';
import { Button, Avatar, FlexContainer, Timer } from 'components';
import './Home.scss';

const Home = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  
  const handleLogout = () => dispatch(logout(user._id));
  
  return (
    <section className='home-page'>
      <Avatar user={user} />
      <Timer initialTime={user.lastLogin} />
      <FlexContainer extraClasses='jc-c'>
        <Button onClick={handleLogout} isPrimary>
          LOGOUT
        </Button>
      </FlexContainer>
    </section>
  );
}

export default Home
