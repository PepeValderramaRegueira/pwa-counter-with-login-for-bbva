import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = ({
  icon,
  extraClasses = '',
  isSmall = false,
  isMedium = false,
  isBig = false,
  isHuge = false,
  isPrimary = false
}) => {
  let stylesProps = '';
  stylesProps += `${isSmall ? 'is-small ' : ''}`;
  stylesProps += `${isMedium ? 'is-medium ' : ''}`;
  stylesProps += `${isBig ? 'is-big ' : ''}`;
  stylesProps += `${isHuge ? 'is-huge ' : ''}`;
  stylesProps += `${isPrimary ? 'is-primary ' : ''}`;
  
  return (
    <FontAwesomeIcon
      icon={icon}
      className={`icon ${stylesProps} ${extraClasses}`.trimRight()}
    />
  );
}

Icon.propTypes = {
  /**
   * Type of icon to be displayed. It must be imported from the FontAwesome
   * dependencies.
   */
  icon: PropTypes.object,

  /**
   * Extra CSS class names.
   */
  extraClasses: PropTypes.string,

  /**
   * Indicates if the icon is small.
   */
  isSmall: PropTypes.bool,

  /**
   * Indicates if the icon is medium.
   */
  isMedium: PropTypes.bool,

  /**
   * Indicates if the icon is big.
   */
  isBig: PropTypes.bool,

  /**
   * Indicates if the icon is huge.
   */
  isHuge: PropTypes.bool,

  /**
   * Indicates if the icon is primary.
   */
  isPrimary: PropTypes.bool
}

export default Icon;
