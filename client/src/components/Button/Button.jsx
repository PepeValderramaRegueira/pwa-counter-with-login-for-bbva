const Button = ({
  type = 'button',
  children,
  extraClasses = '',
  id = '',
  onClick
}) => {
  return (
    <button
      type={type}
      className={`button ${extraClasses}`.trimRight()}
      onClick={onClick || null}
      id={id !== '' ? id : null}
    >
      {children}
    </button>
  );
}

export default Button;
