import './Label.scss';

const Label = ({
  htmlFor,
  text = '',
  extraClasses = ''
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`label ${extraClasses}`.trimRight()}
    >
      {text}
    </label>
  );
}

export default Label;
