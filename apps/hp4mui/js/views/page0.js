define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page0.html',
    'views/base'

], function ($, _, Backbone, pageTemplate, BaseView) {
    'use strict';

    var Page0View = BaseView.extend({

        el: $('#workspace'),

        template: _.template(pageTemplate),

        events: {

        },

        super: function (methodName, args) {
            BaseView.prototype[methodName].apply(this, args);
        },

        initialize: function (options) {
            this.super("initialize", [options]);
            this.options.self.counter.display = false;

        },

        render: function (options) {
            var data,
                me = this;

            this.super("render", [options]);

            return this;
        },

        transitionIn: function (writecallback, callback) {

            this.super("transitionIn", [writecallback, callback]);

        },

        transitionOut: function (writecallback, callback) {

            this.super("transitionOut", [writecallback, callback]);

        }

    });

    return Page0View;
});
