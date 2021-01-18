import PropTypes from 'prop-types';
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

Form.propTypes = {
  /**
   * Function to be executed when the form is submitted.
   */
  onSubmit: PropTypes.func,
  
  /**
   * Extra CSS class names.
   */
  extraClasses: PropTypes.string,
  
  /**
   * Nodes to be included inside the Form.
   */
  children: PropTypes.node,
  
  /**
   * Indicates if is an Access form (login o signup).
   */
  isAccessForm: PropTypes.bool
}

export default Form;
