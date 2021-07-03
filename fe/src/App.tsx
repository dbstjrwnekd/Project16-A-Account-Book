import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { SocketContext, socket } from './context';

const GlobalThemeProvider = React.lazy(
  () => import('styles/GlobalThemeProvider'),
);
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const TransactionRouter = React.lazy(() => import('routes/Transaction'));
const LoginRouter = React.lazy(() => import('routes/Login'));
const AccountRouter = React.lazy(() => import('routes/Account'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalThemeProvider>
          <SocketContext.Provider value={socket}>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => {
                    return <Redirect to="/accounts" />;
                  }}
                />
                <Route path="/login" component={LoginRouter} />
                <Route path="/accounts" component={AccountRouter} />
                <Route path="/transactions" component={TransactionRouter} />
                <Route path="/" component={NotFoundPage} />
              </Switch>
            </Router>
          </SocketContext.Provider>
        </GlobalThemeProvider>
      </Suspense>
    </>
  );
};

export default App;
