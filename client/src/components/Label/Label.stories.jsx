import { useInputValue } from 'hooks/useInputValue';
import Label from './Label';
import Input from './../Input';

export const Default = () => {
  const [ value, setValue ] = useInputValue();
  
  return (
    <div>
      <Label text='Default label' htmlFor='input' />
      <Input
        value={value}
        id='input'
        onChange={setValue}
      />
    </div>
  );
}

export default {
  title: 'components/Label',
  component: Label,
}
