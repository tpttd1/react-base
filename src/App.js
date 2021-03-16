import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NotificationContainer from './components/react-notifications/NotificationContainer';

Object.byString = function (o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
}

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views')
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/user')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);

const App = ({ props }) => {
  return (
    <div className="h-100">
      <React.Fragment>
        <NotificationContainer />
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <Switch>
              <Route
                path="/user"
                render={props => <ViewUser {...props} />}
              />
              <Route
                path="/app"
                render={props => <ViewApp {...props} />}
              />
              <Route
                path="/error"
                exact
                render={props => <ViewError {...props} />}
              />
              <Route
                path="/"
                exact
                render={props => <ViewMain {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Router>
        </Suspense>
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
  const { user: loginUser } = authUser;
  return { loginUser };
};
const mapActionsToProps = {};

// export default connect(
//   mapStateToProps,
//   mapActionsToProps
// )(App);

export default connect(mapStateToProps, mapActionsToProps)(App);

