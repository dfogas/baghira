import * as appState from '../state';
import Component from '../components/component.react';
import React from 'react';
import exposeRouter from '../components/exposerouter.react.js';
import {RouteHandler} from 'react-router';

// Load stores, but don't import anything. Read from global app state instead.
// Remember: Anytime you create a new store, you have to load it here.

import '../auth/store';
import '../users/store';

class App extends Component {

  constructor(props) {
    super(props);
    // set initial state
    this.state = this.getState();
  }

  getState() {
    return {
      auth: appState.authCursor(),
      pendingActions: appState.pendingActionsCursor(),
      user: appState.usersCursor(),
      viewer: appState.usersCursor().get('viewer')
    };
  }

  // this method is not called on the server
  componentDidMount() {
    // eventListeners maybe added here
    // like document.addEventListener('keypress', this.onDocumentKeypress);

    appState.state.on('change', function() {
      console.time('app render'); //eslint-disable-line no-console
      this.setState(this.getState(), () => {
        console.timeEnd('app render'); // eslint-disable-line no-console
      });
    });
  }

  // saving and reloading state, very handy, but must be disabled for the game
  onDocumentKeypress(e) {
    // Press ctrl+shift+s to save app state, and ctrl+shift+l to load.
    if (!e.ctrlKey || !e.shiftKey) return;
    const state = appState.state;
    switch (e.keyCode) {
      case 19:
        window._appState = state.save();
        window._appStateString = JSON.stringify(window._appState);
        /*eslint-disable no-console */
        console.log('App state saved.');
        console.log('To report error, type copy(_appStateString) and press enter.');
        console.log('To debug app state, type _appState and press enter.');
        /*eslint-enable */
        break;
      case 12:
        const stateStr = window.prompt('Paste the serialized state into the input'); // eslint-disable-line no-alert
        const newState = JSON.parse(stateStr);
        if (!newState) return;
        state.load(newState);
        break;
    }
  }

  render() {
    return (
      <div className="page">
        <RouteHandler {...this.state} />
        <footer>
          <p>
            made by d.fogas, reconstruction of @steida este
          </p>
        </footer>
      </div>
    );
  }
}


App.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(App);
