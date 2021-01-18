import './Form.scss';

const Form = ({
  onSubmit,
  extraClasses = '',
  children,
  isAccessForm = false
}) => {
  let propStyles = '';
  propStyles += `${isAccessForm ? 'is-access ' : ''}`
  
  return (
    <form
      onSubmit={onSubmit}
      className={`form ${propStyles} ${extraClasses}`.trimRight()}
    >
      {children}
    </form>
  );
}

export default Form;
