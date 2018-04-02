'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var promises = {};

function loadScript(src) {
  if (promises[src]) {
    return promises[src];
  }
  var promise = promises[src] = new Promise(function (resolve) {
    var el = document.createElement('script');
    var loaded = false;
    el.onload = el.onreadystatechange = function () {
      if (el.readyState && el.readyState !== 'complete' && el.readyState !== 'loaded' || loaded) {
        return resolve(false);
      }
      el.onload = el.onreadystatechange = null;
      loaded = true;
      return resolve(true);
    };

    el.async = true;
    el.src = src;
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(el, head.firstChild);
  });

  return promise;
}

exports.default = loadScript;