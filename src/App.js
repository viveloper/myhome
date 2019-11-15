import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Posts from './components/Posts';
import Todo from './components/Todo';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signin"
            render={props => localStorage.getItem('myhome-user') ? <Redirect to="/" /> : <SignIn {...props} />}
          />
          <Route path="/todo" component={Todo} />
          <Route path="/posts/:category" component={Posts} />          
          <Route path="/blog/:category" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
