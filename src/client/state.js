import State from './lib/state';
// revivers
// import reviveAuth from './auth/revive';
// import reviveWhat from './whatstate/revive';
// import reviveUsers from './users/revive'

// const initialState = process.env.IS_BROWSER
//   ? window._appState
//   : require('../server/initialstate');

//export const state = new State(initialState, function(key,value) {
  // if (key === 'auth') { return reviveAuth(value) };
  // if (key === 'whatstate') { return reviveWhat(value) };
  // if (key === 'users') { return reviveUsers(value) };
//});

// export const authCursor = state.cursor(['auth']);
// export const examplesCursor = state.cursor(['examples'])
// bunch of other cursors whatCursors, i18ncursor, pendingActionsCursor, todos, users etc.
