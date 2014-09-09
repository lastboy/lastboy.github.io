/*global require*/
'use strict';

/*
    RequireJS configuration
 */
require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		angularoute: '../bower_components/angular-route/angular-route',
		jquery: '../bower_components/jquery/dist/jquery.min'
	},
	shim: {
		angular: {
			exports: 'angular',
            deps:['jquery']
		},
        angularoute: {
            deps:['angular']
        }
	}
});

/*
    @[scrap
        @@require[
            /cat/lib/cat.js
        ]
    ]@
*/

/*
    Initial require call
 */
require(['angular', 'angularoute', 'app', 'config/router', 'controllers/app', 'directives/generatelt', 'directives/scrollto'], function (angular) {

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['jqueryspa']);

        /*
         @[scrap
            @@name bootstrapInitTest
            @@assert ok(true, "Bootstrap Initialization failed")
         ]@
         */
    });
        
});
