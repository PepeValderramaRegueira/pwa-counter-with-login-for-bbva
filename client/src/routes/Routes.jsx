import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = ({ routes }) => {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  );
}

export default Routes;
