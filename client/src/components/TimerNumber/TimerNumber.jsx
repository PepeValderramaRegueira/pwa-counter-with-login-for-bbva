import { formatNumberWithZeros } from 'utils/format/formatNumberWithZeros';
import './TimerNumber.scss';

const TimerNumber = ({ number, text }) => {
  return (
    <div className="timer-number">
      <p className="content">
        <span className="number">{formatNumberWithZeros(number)}</span>
        <span className="text">{text}</span>
      </p>
    </div>
  );
}

export default TimerNumber;
