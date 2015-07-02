import State from './lib/state';
import reviveAuth from './auth/revive';
import reviveUsers from './users/revive';
// import reviveWhat from './what/revive';

const initialState = process.env.IS_BROWSER
   ? window._appState
   : require('../server/initialstate');

export const state = new State(initialState, function(key, value) {
  if (key === 'auth') return reviveAuth(value);
  if (key === 'users') return reviveUsers(value);
  // if (key === 'what') { return reviveWhat(value) };
});

export const authCursor = state.cursor(['auth']);
export const usersCursor = state.cursor(['users']);
export const pendingActionsCursor = state.cursor(['pendingActions']);
export const i18nCursor = state.cursor(['i18n']);
// export const whatCursor = state.cursor(['what']);
