import PropTypes from 'prop-types';
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

Avatar.propTypes = {
  /**
   * User object.
   */
  user: PropTypes.shape({
    /**
     * User email.
     */
    email: PropTypes.string.isRequired
  })
}

export default Avatar;
