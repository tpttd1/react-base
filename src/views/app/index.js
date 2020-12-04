import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import AppLayout from '../../layout/AppLayout';

const Home = React.lazy(() =>
  import(/* webpackChunkName: "research" */ './index-page')
);

const Player = React.lazy(() =>
  import(/* webpackChunkName: "research" */ './player')
);


class App extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    console.log(`${match.url}`);
    return (
      // <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Route
                exact
                path={`${match.url}/player/:id`}
                render={props => <Player {...props} />}
              />
              <Route
                path={`${match.url}/`}
                render={props => <Home {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      // </AppLayout>
    );
  }
}

export default App;
// const mapStateToProps = ({ menu }) => {
//   const { containerClassnames } = menu;
//   return { containerClassnames };
// };

// export default withRouter(
//   connect(
//     mapStateToProps,
//     {}
//   )(App)
// );
