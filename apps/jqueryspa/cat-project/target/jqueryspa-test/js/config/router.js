/*global define*/
'use strict';

/**
 * The main controller for the app
 */

define(['app'], function (app) {
    
    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/app.html',
                controller  : 'appController'
            })

            .when('/:id', {
            templateUrl: function(params){ 
                return '/pages/' + params.id;   
            },
                controller  : 'appController'
            });

           
    });
    
});
