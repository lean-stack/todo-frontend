'use strict';

var testSuite = require('./test.js');
var argv = require('optimist').default('laxMode', false).default('browser', 'chrome').argv;

var rootUrl = 'http://localhost:8080/';


var framework = { path: "", name: "Schulung"};

testSuite.todoMVCTest(
	framework.name,
	rootUrl + framework.path + '/index.html', argv.speedMode,
	argv.laxMode, argv.browser);
