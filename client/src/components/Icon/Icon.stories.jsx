import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import Icon from './Icon';

export const Default = () => (
  <div className="icons-container">
    <Icon icon={faBookmark} />
    <Icon icon={faBookmark} isPrimary />
  </div>
)

export const SmallIcon = () => (
  <div className='icons-container'>
    <Icon icon={faBookmark} isSmall />
    <Icon icon={faBookmark} isSmall isPrimary />
  </div>
);

export const MediumIcon = () => (
  <div className="icons-container">
    <Icon icon={faBookmark} isMedium />
    <Icon icon={faBookmark} isMedium isPrimary />
  </div>
);

export const BigIcon = () => (
  <div className="icons-container">
    <Icon icon={faBookmark} isBig />
    <Icon icon={faBookmark} isBig isPrimary />
  </div>
);

export const HugeIcon = () => (
  <div className="icons-container">
    <Icon icon={faBookmark} isHuge />
    <Icon icon={faBookmark} isHuge isPrimary />
  </div>
);

export default {
  title: 'components/Icon',
  component: Icon,
}
