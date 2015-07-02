// you wish
import IntlMessageFormat from 'intl-messageformat';
import IntlRelativeFormat from 'intl-relativeformat';
import {i18nCursor} from '../state';
import {register} from '../dispatcher';
import {List, Map} from 'immutable';

const cachedInstances = Object.create(null);
const intlRelativeFormat = new IntlRelativeFormat;

function getCachedInstanceOf(message) {
  if (message in cachedInstances)
    return cachedInstances(message);
  //TODO: ADD LOCALES SUPPORT
  cachedInstances[message] = new IntlMessageFormat(message);
  return cachedInstances[message];
}

export default function msg(path, values=null): string {
  const pathParts = ['messages'].concat(path.split('.'));
  const message = i18nCursor(pathParts);

  if (message === null)
    throw new ReferenceError('Could not find Intl message: ' + path);

  return !values ? message : getCachedInstanceOf(message).format(values);
}

Object.defineProperty(exports, '__esModule', { //eslint-disable-line no-undef
  value: true
});
exports.msgs = msgs; //eslint-disable-line no-undef

function msgs(path) {
  for (var _len = arguments.length, sliceParams = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)
    sliceParams[_key - 2] = arguments[_key];

  var values = arguments[1] === undefined ? null : arguments[1]; //eslint-disable-line no-undefined

  var pathParts = ['messages'].concat(path.split('.'));
  var messages = i18nCursor(pathParts);

  if (messages == null) throw new ReferenceError('Could not find Intl messages: ' + path);
  if (!List.isList(messages)) throw new ReferenceError('Not a List of Intl messages: ' + path);

  var messageList = !sliceParams ? messages : List.prototype.slice.apply(messages, sliceParams);

  return !values ? messageList : messageList.map(function(item) {
    return item.merge(Map({
      txt: getCachedInstanceOf(item.get('txt')).format(values)
    }));
  });
}

export function relativeDateFormat(date, options?): string {
  return intlRelativeFormat.format(date, options);
}

export function dateFormat(date, locales?, options?): string {
  const dateTimeFormat = new Intl.DateTimeFormat(locales, options);
  return dateTimeFormat.format(date);
}

export const dispatchToken = register(({action, data}) => {
  // TODO: Allow changing locale without app reload. Reset cache, force update
  // root app component and PureComponents as well.
});
