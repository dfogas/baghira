require('babel/polyfill');

var testsContext = require.context('.', true, /spec.js$/); // what is this syntax, brother?
testsContext.keys().forEach(testsContext)
