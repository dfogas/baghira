/*
  Override toString of Flux actions.
*/
export default function setToString(prefix: string, object: Object) {
  Object.keys(object).forEach((name) => {
    const toStringName = prefix + '/' + name;
    object[name].toString = () => toStringName;
  });
}

// used in actions of auth
// evidently, its own implementation of flux
