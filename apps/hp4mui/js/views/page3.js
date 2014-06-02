define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page3.html',
    'views/base',
    'views/control/tab',
    'views/control/flip-toggle'

], function ($, _, Backbone, appsTemplate, BaseView, Tab, FlipToggle) {
    'use strict';

    var Page3View = BaseView.extend({

        el: $('#workspace'),

        template: _.template(appsTemplate),

        // The DOM events specific to an item.
        events: {

        },

        refs: {

        },

        super: function(methodName, args) {
            BaseView.prototype[methodName].apply(this, args);
        },

        initialize: function (options) {
            this.super("initialize",[options]);

        },

        render: function (options) {
            var me = this,
                content;

            function _registerToggleControl(content, ids) {

                if (ids) {
                    ids.forEach(function(id){
                        var toggle = new FlipToggle();
                        toggle.init({elt: content.find(id)});
                    });
                }
            }

            this.super("render",[options]);

            content = $(me.el).find("#page #content");
            if (content) {
                me.refs.tab = new Tab();
                me.refs.tab .init({
                    elt: content.find("._tab")
                });

                _registerToggleControl(content, [
                    "#cpu",
                    "#memory",
                    "#log",
                    "#baterry",
                    "#screenshot",
                    "#restart",
                    "#install",
                    "#uninstall"
                ]);
            }

            return this;
        },

        transitionIn: function (writecallback, callback) {

            var me = this;
            me.super("transitionIn",[writecallback, function() {
                me.refs.tab .selected({index: 0});
            }]);


        },

        transitionOut: function (writecallback, callback) {

            this.super("transitionOut",[writecallback, callback]);

        }

    });

    return Page3View;
});
