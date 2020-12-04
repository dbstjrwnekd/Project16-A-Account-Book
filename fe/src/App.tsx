import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import LoginPage from './pages/LoginPage';
import OauthCallbackPage from './pages/OauthCallbackPage';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route path="/login/oauth-callback" component={OauthCallbackPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/:account" component={MainPage} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
