import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export default Icon;
