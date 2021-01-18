import { useTimer } from 'hooks/useTimer';
import { GridContainer, TimerNumber } from 'components';
import './Timer.scss';

const Timer = ({ initialTime }) => {
  const { days, hours, minutes, seconds } = useTimer(initialTime);
  
  return (
    <div className="timer">
      <GridContainer extraClasses='jc-c timer-number-container'>
        <TimerNumber number={days} text='Days' />
        <TimerNumber number={hours} text='Hours' />
        <TimerNumber number={minutes} text='Minutes' />
        <TimerNumber number={seconds} text='Seconds' />
      </GridContainer>
    </div>
  );
}

export default Timer;
