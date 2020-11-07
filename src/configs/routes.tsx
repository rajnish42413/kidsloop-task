import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store, { history } from "../redux/store";

// const Home = React.lazy(() => import("../screens/home/Home"));
const Login = React.lazy(() => import("../screens/auth/login"));
const Forgot = React.lazy(() => import("../screens/auth/forgot"));
const SignUp = React.lazy(() => import("../screens/auth/signup"));

const publicPaths = [
  { exact: true, path: "/", component: Login },
  { exact: true, path: "/login", component: Login },
  { exact: true, path: "/signup", component: SignUp },
  { exact: true, path: "/forgot-password", component: Forgot }
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Suspense fallback={<div />}>
          {publicRoutes}
          {/* <Route component={NotFound} /> */}
        </Suspense>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
