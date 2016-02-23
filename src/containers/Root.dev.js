import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';
import { syncHistoryWithStore } from 'react-router-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Project from '../components/Project';
import Home from '../components/Home';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  render() {
    const { store } = this.props;

    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(browserHistory, store);

    const wrapComponent = function(Component, props) {
      return React.createClass({
        render: function() {
          return React.createElement(Component, props);
        }
      });
    };

    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <div>

          <Router history={history}>
            <Route path="/" component={ App } >
              <IndexRoute component={ Home }/>
              <Route path="projects/:name" component={ Project } />
            </Route>
          </Router>


          {/* Being the dev version of our Root component, we include DevTools below */}
          <DevTools />
        </div>
      </Provider>
    );
  }
};
