import { useTimer } from 'hooks/useTimer';
import { FlexContainer } from 'components';
import './Timer.scss';

const Timer = ({ initialTime }) => {
  const { days, hours, minutes, seconds } = useTimer(initialTime);
  
  return (
    <div className="timer">
      <FlexContainer extraClasses='jc-c'>
        <p>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds</p>
      </FlexContainer>
    </div>
  );
}

export default Timer;
