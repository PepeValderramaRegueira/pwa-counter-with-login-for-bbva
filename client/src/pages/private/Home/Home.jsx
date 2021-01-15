import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/actions/user-actions';

const Home = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  
  const handleLogout = () => dispatch(logout(user._id));
  
  return (
    <section>
      <h1>Home</h1>
      <button onClick={handleLogout}>
        LOGOUT
      </button>
    </section>
  );
}

export default Home
