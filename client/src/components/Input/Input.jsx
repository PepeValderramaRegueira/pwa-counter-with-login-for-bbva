import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  type = 'text',
  value = '',
  extraClasses = '',
  placeholder = '',
  name = '',
  id = '',
  isDisabled = false,
  onChange
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`input ${extraClasses}`.trimRight()}
      disabled={isDisabled}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  /**
   * Button type.
   */
  type: PropTypes.oneOf(['text', 'number', 'password', 'hidden']),

  /**
   * Input value.
   */
  value: PropTypes.string,

  /**
   * Extra CSS classes.
   */
  extraClasses: PropTypes.string,

  /**
   * Displayed text when the input is empty.
   */
  placeholder: PropTypes.string,

  /**
   * Input name.
   */
  name: PropTypes.string,

  /**
   * Unique DOM identifier.
   */
  id: PropTypes.string,

  /**
   * Indicates if the input is disabled.
   */
  isDisabled: PropTypes.bool,

  /**
   * Function that is executed when the input value changes.
   */
  onChange: PropTypes.func,
}

export default Input;
