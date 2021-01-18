import './FlexContainer.scss';

const FlexContainer = ({ children, extraClasses = '' }) => (
  <div className={`flex-container ${extraClasses}`.trimRight()}>
    {children}
  </div>
);

export default FlexContainer;
