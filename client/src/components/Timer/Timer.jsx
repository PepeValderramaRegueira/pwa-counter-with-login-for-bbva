import { useTimer } from 'hooks/useTimer';
import { FlexContainer, TimerNumber } from 'components';
import './Timer.scss';

const Timer = ({ initialTime }) => {
  const { days, hours, minutes, seconds } = useTimer(initialTime);
  
  return (
    <div className="timer">
      <FlexContainer extraClasses='jc-c'>
        <TimerNumber number={days} text='Days' />
        <TimerNumber number={hours} text='Hours' />
        <TimerNumber number={minutes} text='Minutes' />
        <TimerNumber number={seconds} text='Seconds' />
      </FlexContainer>
    </div>
  );
}

export default Timer;
