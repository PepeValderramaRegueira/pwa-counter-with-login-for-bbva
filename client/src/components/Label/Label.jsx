import PropTypes from 'prop-types';
import './Label.scss';

const Label = ({
  htmlFor,
  text = '',
  extraClasses = ''
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`label ${extraClasses}`.trimRight()}
    >
      {text}
    </label>
  );
}

Label.propTypes = {
  /**
   * Reference for the input id.
   */
  htmlFor: PropTypes.string,

  /**
   * Text to be displayed.
   */
  text: PropTypes.string,

  /**
   * Extra CSS class names.
   */
  extraClasses: PropTypes.string
}

export default Label;
