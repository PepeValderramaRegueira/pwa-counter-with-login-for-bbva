import { useState } from 'react';
import { useInputValue } from 'hooks/useInputValue';
import Input from './Input';

export const Default = () => {
  const [ value, setValue ] = useInputValue();
  
  return (
    <Input
      value={value}
      onChange={setValue}
      placeholder='Default input'
    >
      Default
    </Input>
  );
}

export default {
  title: 'components/Input',
  component: Input,
}
