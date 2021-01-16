import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  type = 'button',
  extraClasses = '',
  id = '',
  isPrimary = false,
  isSmall = false,
  isBig = false,
  onClick,
  children
}) => {
  let styleProps = '';
  styleProps += isPrimary ? 'is-primary ' : '';
  styleProps += isSmall ? 'is-small ' : '';
  styleProps += isBig ? 'is-big ' : '';
  
  return (
    <button
      type={type}
      className={`button ${styleProps} ${extraClasses}`.trimRight()}
      onClick={onClick || null}
      id={id !== '' ? id : null}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /**
   * Button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /**
   * Additional CSS classes.
   */
  extraClasses: PropTypes.string,

  /**
   * Unique DOM identifier.
   */
  id: PropTypes.string,

  /**
   * Indicates if is a primary button.
   */
  isPrimary: PropTypes.bool,

  /**
   * Function to execute when the button is clicked.
   */
  onClick: PropTypes.func,
  
  /**
   * React children nodes.
   */
  children: PropTypes.node
}

export default Button;
