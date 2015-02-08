/*
 * assemble-mustache
 * https://github.com/tomsky/assemble-mustache
 *
 * Copyright (c) 2014 Tom-Marius Olsen
 * Licensed under the MIT license.
 */

var fs = require('fs');
var mustache = require('mustache');
var marked = require('marked');
marked.setOptions({
  gfm: true
});
var partials = {};

var plugin = function() {
    'use strict';

    var init = function(options, params) {
        params.assemble.options.data.markdown = function(){
            return function(text, render) {
                var md = marked(text);
                return render(md);
            }
        };

        params.assemble.options.data.md = function(){
            return function(text, render) {
                var file = fs.readFileSync(text.trim(), 'utf8');
                var md = marked(file);
                return render(md);
            }
        };
    };

    var compile = function(src, options, callback) {
        //Does nothing
    };

    var render = function(tmpl, options, callback) {
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
