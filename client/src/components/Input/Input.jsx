const Input = ({
  type = 'text',
  value = '',
  extraClasses = '',
  onChange,
  placeholder = '',
  name = '',
  id = ''
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`input ${extraClasses}`.trimRight()}
      onChange={onChange}
    />
  );
}

export default Input;
