/*global define*/
define([
	'underscore',
	'backbone',
	'models/device'

], function (_, Backbone, Device) {
	'use strict';

	var DevicesCollection = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: Device,

        initialize: function () {
            console.log("[todomvcspa devices collection] Initialized");
        },

        url: "./data/devices.json"



    });

	return DevicesCollection;
});
