/*
 * assemble-mustache
 * https://github.com/tomsky/assemble-mustache
 *
 * Copyright (c) 2014 Tom-Marius Olsen
 * Licensed under the MIT license.
 */


var mustache = require('mustache');
var partials = {};

var plugin = function() {
  'use strict';

  var init = function() {
      console.log('init');
  };

  var compile = function(src, options, callback) {
    //Does nothing
  };

  var render = function(tmpl, options, callback) {
    console.log('render');
    var content;
    try {
      if(typeof tmpl === 'string') {
        tmpl = mustache.render(tmpl, options, partials);
      }
      content = tmpl;
    } catch (ex) {
      callback(ex, null);
    }
    callback(null, content);
  };

  var registerFunctions = function(helperFunctions) {
    //Does nothing
  };

  var registerPartial = function(filename, content) {
    partials[filename] = content;
  };

  return {
    init: init,
    compile: compile,
    render: render,
    registerFunctions: registerFunctions,
    registerPartial: registerPartial,
    mustache: mustache
  };
};

module.exports = exports = plugin();
