; // jshint ignore:line
(function (root, factory, undefined) {
  'use strict';
  
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    // root is window
    root.Cookify = factory();
  }
}(window, function () {
  'use strict';

  var Cookify,
    document = window.document;

  Cookify = function (function, undefined) {
    if (!(this instanceof Cookify)) {
      return new Cookify(function);
    }

    //this.useLocalStorage = useLocalStorage || false;
    this.init();
  };

  Cookify.prototype = {
    init: function () {
    
    }
  };

  return Cookify;
}));
