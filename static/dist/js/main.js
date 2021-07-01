(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require("./polyfills/closest");

require("./polyfills/remove");

document.body.className = document.body.className.replace('no-js', 'js'); // Polyfills
// Project code
// import './[module]';

},{"./polyfills/closest":2,"./polyfills/remove":3}],2:[function(require,module,exports){
'use strict'; // Polyfills for Element.matches() and Element.closest() function

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) {
        return el;
      }

      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

},{}],3:[function(require,module,exports){
"use strict";

// Polyfill for el.remove()
// from https://github.com/chenzhenxi/element-remove
(function (arr) {
  'use strict';

  arr.forEach(function (item) {
    // eslint-disable-next-line no-prototype-builtins
    if (item.hasOwnProperty('remove')) {
      return;
    }

    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode && this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean));

},{}]},{},[1]);
