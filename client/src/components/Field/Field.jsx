import PropTypes from 'prop-types';
import './Field.scss';

const Field = ({
  extraClasses = '',
  Input,
  Label,
  message = null
}) => {
  return (
    <div className={`field ${extraClasses}`.trimRight()} >
      {Label}
      {Input}
      {message !== null && (
        <p className={`message is-${message.type}`}>{message.text}</p>
      )}
    </div>
  );
}

Field.propTypes = {
  /**
   * Extra CSS class names.
   */
  extraClasses: PropTypes.string,

  /**
   * React node of type Input.
   */
  Input: PropTypes.node,

  /**
   * React node of type Label.
   */
  Label: PropTypes.node,

  /**
   * If defined, it's used to display a warning or error message.
   */
  message: PropTypes.shape({
    /**
     * Type of message.
     */
    type: PropTypes.oneOf(['error', 'warning']),
    
    /**
     * Message to be displayed.
     */
    message: PropTypes.string
  })
}

export default Field;
