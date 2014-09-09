/*global define*/
'use strict';

/**
 * The main controller for the our app
 */

define(['app', 'common/manager', 'services/data', "directives/scrollto"], function (app, manager, appdata, scrolldirective) {
    
    // App controller creation
    app.controller('appController', ['appData', '$scope', "$interval", function(appData, $scope, $interval) {

        // Initial selected section as empty
        $scope.selectedSection = {name: "", data: undefined};
        
        // On meta-data retrieved setup the UI accordingly
        appData.then(function(data) {
            
            // Set the data into scope
            $scope.pages = data.all();

            // Run the common script
            var _interval;
            
            if (data) {
                _interval = $interval(function(){
                    if (manager.init($scope, scrolldirective, data)) {
                        $interval.cancel(_interval);

                        /*
                         @[scrap
                            @@name menuTest
                            @@description Top Menu Validation
                            @@assert ok($("#menu"), "menu section is no valid or not exists")
                         ]@
                         
                         @[scrap
                            @@name menuItemsAction
                            @@description Top Menu Actions
                            @@jqm click("#menu a[scroll-to=" + @d.next(.menu).name + "]")
                         ]@
                         */
                    }
                }, 200) ;
            }

        });

      
    }]);
    
});
