import './Field.scss';

const Field = ({
  extraClasses = '',
  Input,
  Label,
  message = null
}) => {
  return (
    <div className={`field ${extraClasses}`.trimRight()} >
      {Label}
      {Input}
      {message !== null && (
        <p className={`message is-${message.type}`}>{message.text}</p>
      )}
    </div>
  );
}

export default Field;
