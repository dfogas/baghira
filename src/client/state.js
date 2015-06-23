import State from './lib/state';
// revivers
// import reviveAuth from './auth/revive';
// import reviveWhat from './what/revive';
// import reviveUsers from './users/revive'

const initialState = process.env.IS_BROWSER
   ? window._appState
   : require('../server/initialstate');

export const state = new State(initialState, function(key,value) {
  // if (key === 'auth') { return reviveAuth(value) };
  // if (key === 'users') { return reviveUsers(value) };
  // if (key === 'what') { return reviveWhat(value) };
});

export const appCursor = state.cursor(['app']);
export const authCursor = state.cursor(['auth']);
export const userCursor = state.cursor(['users']);
export const whatCursor = state.cursor(['what']);
// bunch of other cursors whatCursors, i18ncursor, pendingActionsCursor, todos, users etc.
