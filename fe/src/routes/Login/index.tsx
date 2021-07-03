import React, { Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const LoginPage = React.lazy(() => import('pages/LoginPage'));
const OauthCallbackPage = React.lazy(() => import('pages/OauthCallbackPage'));

const LoginRouter = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path={`${url}/oauth-callback`}
            component={OauthCallbackPage}
          />
          <Route path={`${url}`} component={LoginPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default LoginRouter;
