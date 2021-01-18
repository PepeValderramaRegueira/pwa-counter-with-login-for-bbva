import { Title } from 'components';
import AvatarImage from 'assets/images/rocket.png';
import './Avatar.scss';

const Avatar = ({
  user
}) => {
  return (
    <div className="avatar">
      <img className='profile-image' src={AvatarImage} alt="Avatar"/>
      <Title
        tag='h2'
        text={user.email}
        extraClasses='profile-email'
      />
    </div>
  );
}

export default Avatar;
