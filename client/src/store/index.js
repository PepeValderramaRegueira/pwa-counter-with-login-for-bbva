import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { sessionSpy } from './middlewares/session-spy';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, sessionSpy)
);

export default store;
