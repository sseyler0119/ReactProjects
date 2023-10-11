import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Switch renders the first child <Route> that matches a route path, * always matches */}
      <Switch>  
        <Route path='/' exact={true}>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'> 
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
