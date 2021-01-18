import { useDispatch } from 'react-redux';
import { login } from 'store/actions/user-actions';
import { useInputValue } from 'hooks/useInputValue';
import { Field, Input, Label, Button, Form, Icon } from 'components';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './Login.scss';

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
      <Form onSubmit={handleFormSubmit} isAccessForm>
        <Icon icon={faClock} isHuge isPrimary extraClasses='logo' />
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
        <div className="form-actions">
          <Button type="submit" isPrimary>
            LOGIN
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Login;
