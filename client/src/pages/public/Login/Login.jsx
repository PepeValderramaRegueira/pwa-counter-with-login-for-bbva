import { useDispatch } from 'react-redux';
import { login } from 'store/actions/user-actions';
import { useInputValue } from 'hooks/useInputValue';
import { Field, Input, Label, Button } from 'components';

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
        <Field
          Label={<Label text='Email' />}
          Input={<Input
            value={email}
            id='email'
            placeholder='Email'
            name='email'
            onChange={handleEmailChange}
          />}
        />
        <Field
          Label={<Label text='Password' />}
          Input={<Input
            type='password'
            value={password}
            id='password'
            placeholder='password'
            name='password'
            onChange={handlePasswordChange}
          />}
        />
        <Button type="submit" isPrimary>
          Login
        </Button>
      </form>
    </section>
  );
};

export default Login;
