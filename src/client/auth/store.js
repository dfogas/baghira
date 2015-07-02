import * as actions from './actions';
import {authCursor} from '../state';
import {register} from '../dispatcher';

// no store is defined just dispatchToken function, strange...
export const dispatchToken = register(function({action, data}) {
  if (action === actions.loginError)
    authCursor(function(auth) {
      const error = data;
      return auth.setIn(['form', 'error'], error);
    });

  if (action === actions.updateFormField)
    authCursor(function(auth) {
      const {name, value} = data;
      return auth.setIn(['form', 'fields', name], value);
    });
});
