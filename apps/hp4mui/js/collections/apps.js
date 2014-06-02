/*global define*/
define([
	'underscore',
	'backbone',
	'models/app'

], function (_, Backbone, App) {
	'use strict';

	var AppsCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: App,

        initialize: function () {
            console.log("[todomvcspa app collection] Initialized");
        },

        url: "./data/apps.json"



    });

	return AppsCollection;
});
