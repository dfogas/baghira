import State from './lib/state';
import reviveAuth from './auth/revive';
import reviveUsers from './users/revive';
// import reviveWhat from './what/revive';

const initialState = process.env.IS_BROWSER
   ? window._appState
   : require('../server/initialstate');

export const appState = new State(initialState, function(key, value) {
  if (key === 'auth') return reviveAuth(value);
  if (key === 'users') return reviveUsers(value);
  // if (key === 'what') { return reviveWhat(value) };
});

export const authCursor = appState.cursor(['auth']);
export const i18nCursor = appState.cursor(['i18n']);
export const pendingActionsCursor = appState.cursor(['pendingActions']);
export const usersCursor = appState.cursor(['users']);
// export const whatCursor = state.cursor(['what']);
