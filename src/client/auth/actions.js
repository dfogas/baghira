import Promise from 'bluebird';
import setToString from '../lib/settostring';
import ValidationError from '../lib/validation';
import {dispatch} from '../dispatcher';
import {validate} from '../validation';
import {msg} from '../intl/store';

export function login(fields) {
  //promise because we do not know whether fields are validate
  const promise = validateForm(fields)
    .then(() => {
      return validateCredentials(fields);
    })
    .catch(function(error) {
      loginError(error);
      throw error;
    });

    // ?dispatch login object if promise is fulfilled?
    return dispatch(login, promise);
}

function validateForm(fields) {
  // Validate function is just wrapper for node-validator providing promise api,
  // so we can mix client sync and server async validations easily.
  return validate(fields)
    // Of course we can add another validation methods.
    .prop('email').required().email()
    .prop('password').required().simplePassword()
    .promise;
}

function validateCredentials(fields) {
  return new Promise((resolve, reject) => {

    // for real usage consider mathew-andrews isomporphic-fetch
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/v1/auth/login', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    // TODO: Show how to handle different password/username server errors.
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200)
        resolve(fields);
      else
        reject(new ValidationError(msg('auth.form.wrongPassword'), 'password'));
    };

    xhr.send(JSON.stringify(fields));
  });
}

export function loginError(error) {
  dispatch(loginError, error);
}

export function logout() {
  //always reload for security reasons??
  location.href = '/';
}

export function updateFormField({target: {name, value}}) {
  // email and password max length is 100
  value = value.slice(0, 100);
  dispatch(updateFormField, {name, value});
}

setToString('auth', {
  login,
  logout,
  loginError,
  updateFormField
});
