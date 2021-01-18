import './AppContainer.scss';

const AppContainer = ({ children }) => {
  return (
    <div className="app-container">
      {children}
    </div>
  );
}

export default AppContainer;
