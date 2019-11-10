import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/signin"
          render={props => localStorage.getItem('myhome-user') ? <Redirect to="/" /> : <SignIn {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
