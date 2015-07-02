// these revivers are not found in traditional flux as well as cursors, must be something to do with immutable as well as cursors are
import Form from './form.js';
import {Map} from 'immutable';

export default function(value) {
  return Map(value).set('form', new Form);
}
