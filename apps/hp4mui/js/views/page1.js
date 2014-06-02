define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page1.html',
    'text!templates/controls/petek.html',
    'views/base',
    'collections/apps'

], function ($, _, Backbone, appsTemplate, petekTemplate, BaseView, AppsCollection) {
    'use strict';

    var Page1View = BaseView.extend({

        el: $('#workspace'),

        template: _.template(appsTemplate),

        // The DOM events specific to an item.
        events: {

        },

        transition: {
            delay: 0
        },

        enum: {
            DEFAULT_ICON: "data:image/png;base64,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",

            ADD_APP: {
                "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMjcvMTS1hFZGAAAAC3RFWHRzcGVjdGVySUQAMqlhE68AAAFrSURBVHic7d3RCcJAFADBRGzADqzlCk9LagWxAf1QYsR15jMQeLAcBA5e5nVdJzoO3x6AbQkaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxhy/PcAnLcvy6CrpNMa47j7MTpzQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFjBI0RNEbQGEFj5ld/xPNk3RobG2PM77znhMYIGiNojKAx7+zLPW0+xedcHjw7T9N023mO3bz8lftLLEDm5wkaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxggaI2iMoDGCxqQ3if0jJzRG0BhBYwSNETRG0BhBYwSNETRG0Jg75gkc7kc0T5QAAAAASUVORK5CYII=",
                title: "<div class='new-app'>Add New App</div>",
                description: "",
                version: "",
                navigateto: "javascript:void(0)"
            }
        },

        super: function (methodName, args) {
            BaseView.prototype[methodName].apply(this, args);
        },

        initialize: function (options) {
            this.model = new AppsCollection();
            this.super("initialize", [options]);

        },

        render: function (options) {
            var data,
                me = this;

            this.super("render", [options]);

            // Fetch Apps collection
            data = this.model.fetch({
                success: function (data) {

                    var petekCompile = _.template(petekTemplate),
                        out = petekCompile(me.enum.ADD_APP),
                        appsData = (data ? data.toJSON() : undefined),
                        ptakim, contentElt, counter = 0;

                    if (appsData) {
                        appsData.forEach(function (appData) {

                            out += petekCompile({
                                "icon": (appData.icon || me.enum.DEFAULT_ICON),
                                title: (appData.name || "NA"),
                                description: "Description about the application",
                                version: "Version" + appData.version
                            });

                        });

                        contentElt = $(me.el).find("#page #content").html(out);
                        if (contentElt) {
                            ptakim = contentElt.children();
                            if (ptakim) {

                                counter = 0;
                                ptakim.each(function () {

                                    var petekclick = $(this),
                                        petek = $(this).find(".petek"),
                                        innerptakim = contentElt.children();

                                    // TODO: First Petek should contain a different listener for creating new app
                                    if (petek && counter > 0) {

                                        petekclick.on("click", function () {

                                            petek.animate({
                                                top: -80

                                            }, 700, function () {

                                                petek.animate({
                                                    top: 0

                                                }, 300, function () {
                                                    // Animation complete.
                                                    hp4mui.navigate("#page/2/1");
                                                });

                                                /*
                                                     // TODO: transitionOut should contain this kind of transition. We need to caluculate the in too.
                                                     var innercounter = innerptakim.size();
                                                     innerptakim.each(function () {

                                                     var item = $(this).find(".petek");

                                                     item.animate({
                                                     top: ((-80 ) - (( 1000 + innercounter) * innercounter))

                                                     }, 1000, function () {
                                                     // Animation complete.


                                                     hp4mui.navigate("#page/2/1");
                                                     });

                                                     innercounter--;

                                                     //hp4mui.navigate("#page/2/1");
                                                 });
                                                 */
                                            });


                                        });
                                    }

                                    counter++;
                                });
                            }
                        }

                    }
                },

                error: function (err) {
                    console.error(err);

                }
            }).complete(function () {

                });

            return this;
        },

        transitionIn: function (writecallback, callback) {

            var me = this;

            me.super("transitionIn", [writecallback, callback]);


        },

        transitionOut: function (writecallback, callback) {

            var me = this;
            me.super("transitionOut", [writecallback, callback]);
        }

    });

    return Page1View;
});
