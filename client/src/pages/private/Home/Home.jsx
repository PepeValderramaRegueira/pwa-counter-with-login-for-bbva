import { useDispatch } from 'react-redux';
import { logout } from 'store/actions/user-actions';

const Home = () => {
  const dispatch = useDispatch();
  
  const handleLogout = () => dispatch(logout());
  
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
