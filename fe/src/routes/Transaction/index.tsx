import React, { Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import useAccountInfo from 'hooks/useAccountInfo';

const CalendarPage = React.lazy(() => import('pages/CalendarPage'));
const AuthCheck = React.lazy(() => import('pages/AuthCheck'));
const StatisticsPage = React.lazy(() => import('pages/StatisticsPage'));
const StatisticsDetailPage = React.lazy(
  () => import('pages/StatisticsDetailPage'),
);
const MainPage = React.lazy(() => import('pages/MainPage'));
const CreateTransactionPage = React.lazy(
  () => import('pages/CreateTransactionPage'),
);
const UpdateTransactionPage = React.lazy(
  () => import('pages/UpdateTransactionPage'),
);
const CategoryPage = React.lazy(() => import('pages/CategoryPage'));
const ChattingPage = React.lazy(() => import('pages/ChattingPage'));

const TransactionRouter = () => {
  const { url } = useRouteMatch();
  const [loading] = useAccountInfo();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthCheck />
        {!loading && (
          <>
            <Switch>
              <Route
                path={`${url}/:owner/:title/create`}
                component={CreateTransactionPage}
              />
              <Route
                path={`${url}/:owner/:title/update`}
                component={UpdateTransactionPage}
              />
              <Route
                path={`${url}/:owner/:title/statistics/detail`}
                component={StatisticsDetailPage}
              />
              <Route
                path={`${url}/:owner/:title/statistics`}
                component={StatisticsPage}
              />
              <Route
                path={`${url}/:owner/:title/calendar`}
                component={CalendarPage}
              />
              <Route
                path={`${url}/:owner/:title/category`}
                component={CategoryPage}
              />
              <Route
                path={`${url}/:owner/:title/chatting`}
                component={ChattingPage}
              />
              <Route path={`${url}/:owner/:title`} component={MainPage} />
            </Switch>
          </>
        )}
      </Suspense>
    </>
  );
};

export default TransactionRouter;
