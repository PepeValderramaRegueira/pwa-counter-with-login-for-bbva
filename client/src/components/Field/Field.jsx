const Field = ({
  extraClasses = '',
  children
}) => {
  return (
    <div
      className={`field ${extraClasses}`.trimRight()}
    >
      {children}
    </div>
  );
}

export default Field;
