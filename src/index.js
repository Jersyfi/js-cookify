(function (root, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Alpine = factory());
}(this, function () {
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
