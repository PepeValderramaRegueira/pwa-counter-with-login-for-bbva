const Input = ({
  type = 'text',
  value = '',
  extraClasses = '',
  onChange,
  placeholder = '',
  name = ''
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      className={`input ${extraClasses}`.trimRight()}
      onChange={onChange}
    />
  );
}

export default Input;
