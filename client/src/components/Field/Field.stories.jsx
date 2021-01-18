import { useInputValue } from 'hooks/useInputValue';
import Field from './Field';
import Label from './../Label';
import Input from './../Input';

export const Default = () => {
  const [ value, setValue ] = useInputValue();

  const input = <Input value={value} id='field-input' onChange={setValue} />
  const label = <Label text='Default label' htmlFor='field-input' />
  
  return (
    <Field
      Input={input}
      Label={label}
    />
  );
}

export const FieldWithInputErrorMessage = () => {
  const [ value, setValue ] = useInputValue();

  const input = <Input value={value} id='field-user' onChange={setValue} />
  const label = <Label text='Default label' htmlFor='field-user' />
  
  return (
    <Field
      Input={input}
      Label={label}
      message={{
        type: 'error',
        text: 'This is an error message'
      }}
    />
  );
}

export const FieldWithWarningMessage = () => {
  const [ value, setValue ] = useInputValue();

  const input = <Input value={value} id='field-user' onChange={setValue} />
  const label = <Label text='Default label' htmlFor='field-user' />
  
  return (
    <Field
      Input={input}
      Label={label}
      message={{
        type: 'warning',
        text: 'This is warning message'
      }}
    />
  );
}

export default {
  title: 'components/Field',
  component: Field,
}
