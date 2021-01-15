import { useDispatch } from 'react-redux';
import { Field, Input, Label } from 'components';
import { useInputValue } from 'hooks/useInputValue';
import { login } from 'store/actions/user-actions';

const Login = () => {
  const [ email, handleEmailChange ] = useInputValue();
  const [ password, handlePasswordChange ] = useInputValue();
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
      email: email,
      password: password
    }));
  }
  
  return (
    <section className='login-page'>
      <h1>Login page</h1>
      <form onSubmit={handleFormSubmit}>
        <Field>
          <Label text='Email' />
          <Input
            value={email}
            id='email'
            placeholder='Email'
            name='email'
            onChange={handleEmailChange}
          />
        </Field>
        <Field>
          <Label text='Password' />
          <Input
            value={password}
            id='password'
            placeholder='password'
            name='password'
            onChange={handlePasswordChange}
          />
        </Field>
        <button type="submit">
          LOGIN
        </button>
      </form>
    </section>
  );
};

export default Login;
