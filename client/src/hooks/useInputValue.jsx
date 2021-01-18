import { useState } from 'react';

const useInputValue = (defaultValue = '') => {
  const [ value, setValue ] = useState(defaultValue);
  const handleChange = (e) => setValue(e.target.value);

  return [ value, handleChange ];
}

export {
  useInputValue
}
