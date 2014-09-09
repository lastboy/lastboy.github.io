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
*//**
 *  catjs require configuration - for additional require config use your application's 
 */
require.config({"shim":{"catjs":{"exports":"_cat","deps":["chai"]},"catsrc":{"deps":["cat"]}},"paths":{"chai":"/apps/jqueryspa/cat-project/target/jqueryspa-test/cat/lib/chai","jspath":"/apps/jqueryspa/cat-project/target/jqueryspa-test/cat/lib/jspath","tmr":"/apps/jqueryspa/cat-project/target/jqueryspa-test/cat/lib/tmr","cat":"/apps/jqueryspa/cat-project/target/jqueryspa-test/cat/lib/cat","catsrc":"/apps/jqueryspa/cat-project/target/jqueryspa-test/cat/lib/cat.src"}});
require(["chai","jspath","tmr","cat","catsrc"], function(chai,jspath,tmr,cat,catsrc) {

    if (typeof chai !== "undefined") {
        window["chai"] = chai;
    }
    if (typeof jspath !== "undefined") {
        window["JSPath"] = jspath;
    }
    _cat.utils.Loader.requires(["/apps/jqueryspa/cat-project/target/jqueryspa-test/cat/lib/cat.css"])

});

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
         */_cat.core.action(this, {"pkgName":"jqueryspa-test.js.config.bootstrapInitTest"},this);
    });
        
});
