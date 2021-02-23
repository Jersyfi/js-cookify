(function (root, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Cookify = factory());
}(this, function () {
  'use strict';

  var Cookify,
    document = window.document;

  Cookify = function (loader, undefined) {
    if (!(this instanceof Cookify)) {
      return new Cookify(loader);
    }

    this.useName = loader.name || 'cookify';
    this.useExpire = loader.expire || '365';
    this.init();
  };

  Cookify.prototype = {
    /**
     * init()
     * 
     * For initializing cookify
     * 
     * @param {any} obj
     */
    init: function () {
      var types = document.querySelectorAll(this.getDataView);
      
      for (const type in types) {
        this.type.push(type);
      }
      
      this.caValues = this.type.concat(this.getViewed)
      this.checkCookie();
      
      if (this.getCookieState(this.getViewed)) {
          if (!this.getOnlyNecassary()) {
              this.type.forEach(element => {
                  if (this.getCookieState(element)) {
                      this.changeScriptType(element, 'js');
                      document.querySelector(this.getDataCheckbox(element)).checked = 'checked';
                  }
              });
          }
      } else {
        document.querySelector(this.getDataView(this.getView.info)).style.display = 'block';
      }
      
      // Initilization of all components
    },
    
    getDataView: function (element = '') {
      return '[data-c-view="${element}"]'
    },
    
    getDataCheckbox: function (element = '') {
      return '[data-c-check="${element}"]'
    },
    
    getDataScript: function (element = '') {
      return '[data-c-script="${element}"]'
    },
    
    getView: {
      button: 'button',
      info: 'info',
      manage: 'manage'
    },
    
    getViewed: 'viewed',
    
    useType: '',
    
    /**
     * getOnlyNecassary()
     * 
     * return if only necessary is selected
     * 
     * @return {boolean}
     */
    getOnlyNecessary: function () {
      var size = 0;

      for (const key in this._cookies) {
          if (this._cookies.hasOwnProperty(key)) {
              size++;
          }
      }

      if (size > 1) {
          return false;
      }

      return true;
    },
    
    /**
     * setCookie()
     * 
     * cookies can be set here
     * 
     * @param {any} cookieValue
     */
    setCookie: function (ca) {
      var d = new Date(),
          expires = '';
      
      d.setTime(d.getTime() + (this._expire * 24 * 60 * 60 * 1000));
      expires = 'expires=' + d.toUTCString();
      document.cookie = this.useName + '=' + btoa(JSON.stringify(ca)) + ';' + expires + ';path=/';
    },
    
    /**
     * getCookie()
     * 
     * cookies can be get here
     * 
     * @param {any} cookieName 
     */
    getCookie: function () {
      var name = this.useName + '=',
          ca = document.cookie.split(';');

      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return JSON.parse(atob(c.substring(name.length, c.length)));
          }
      }
      return false;
    },
    
    /**
     * createCookie()
     * 
     * create the cookie for cookify
     */
    createCookie: function () {
      var ca = {};

      this._caValues.forEach(value => {
          ca[value] = false;
      });

      this.setCookie(ca);
    },
    
    /**
     * checkCookie()
     * 
     * For checking if the cookie is set correct
     */
    checkCookie: function () {
      var cookie = this.getCookie();

      if (cookie != '' && typeof cookie == 'object') {
          this._caValues.forEach(value => {
              if (Object.keys(cookie).indexOf(value) == -1) {
                  this.createCookie();
              }
          });
      } else {
          this.createCookie();
      }
    },
    
    /**
     * changeCookieState()
     * 
     * A cookie state can be changed to false or true
     * 
     * @param {any} type 
     * @param {["true", "false"]} value
     */
    changeCookieState: function () {
      var ca = this.getCookie();

      for (const key in ca) {
          if (ca.hasOwnProperty(key)) {
              if (key == type) {
                  if (value == 'true') {
                      ca[key] = true;
                  } else {
                      ca[key] = false;
                  }
              }
          }
      }

      this.setCookie(ca);
    },
    
    /**
     * getCookieState()
     * 
     * read a cookie state
     * 
     * @param {any} type 
     */
    getCookieState: function () {
      var ca = this.getCookie();

      for (const key in ca) {
          if (ca.hasOwnProperty(key)) {
              if (key == type) {
                  if (ca[key] === true) {
                      return true;
                  } else {
                      return false;
                  }
              }
          }
      }
    },
    
    /**
     * changeScriptType()
     * 
     * Any Script type can be changed from text/plain
     * and text/javascript and back
     * 
     * @param {any} cookieType
     * @param {["js", "plain"]} type
     */
    changeScriptType: function () {
      var elements = document.getElementsByTagName("script");

      for (const i in elements) {
          if (elements.hasOwnProperty(i)) {
              const element = elements[i];

              if (element.hasAttribute(this._name)) {
                  if (element.getAttribute(this._name) == cookieType) {
                      if (element.hasAttribute('type')) {
                          if (type == 'js') {
                              element.setAttribute('type', 'text/javascript');
                              var attr = element.getAttribute('src');
                              element.removeAttribute('src');
                              element.setAttribute("src", attr);
                          } else {
                              element.setAttribute('type', 'text/plain');
                          }
                      }
                  }
              }
          }
      }
    },
    
    /**
     * addClickListener
     * 
     * For adding a event listner to a dom element
     */
    addClickListener: function (DOMElement, callback) {
      DOMElement.addEventListener('click', callback);
    }
  };

  return Cookify;
}));
