import './GridContainer.scss';

const GridContainer = ({ children, extraClasses = '' }) => {
  return (
    <div className={`grid-container ${extraClasses}`.trimRight()}>
      {children}
    </div>
  );
}

export default GridContainer;
