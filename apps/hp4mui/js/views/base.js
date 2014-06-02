define([
    'jquery',
    'underscore',
    'backbone'

], function ($, _, Backbone) {
    'use strict';

    var BaseView = Backbone.View.extend({


        config: function(id) {
            var page = "page"+id,
                me = this,
                pageconfig;

            me.options.pages = {

                page0: {
                    delay: 700,
                    top: 50,
                    topin: 1000,
                    topout: 1000,
                    counter: {
                        display: true
                    }
                }
            };

            pageconfig = me.options.pages[page];
            if (!pageconfig) {
                pageconfig = me.options.pages["page0"];
            }
            return pageconfig;
        },

        initialize: function (options) {
            var me = this;
            me.options = (options || {});
            me.options.self = me.config(me.options.id);
        },

        render: function (options) {
            var me = this,
                callback = options.callback;

            function _renderCounter() {
                var counters = $(".counter-wrapper"),
                    meoptions = me.options.self,
                    index=0;

                if (meoptions.counter.display) {
                    if (counters) {
                        counters.each(function() {
                            var compile = _.template("<%= counter %>"),
                                counterbg = $(this).find(".counter-bg"),
                                counter = $(this).find(".counter"),
                                text = $(this).find(".counter .text");

                            text.html(compile({counter:(parseInt(me.options.id)+index)}));
                            counter.css("opacity", "1");
                            counterbg.removeClass();
                            counterbg.addClass("counter-bg");
                            counterbg.addClass("counter-bg-page" + me.options.id + "-" + index);
                            index++;
                        });
                    }
                } else {
                    counters.each(function() {
                        var counterbg = $(this).find(".counter-bg");
                        if (counterbg) {
                            counterbg.removeClass();
                            counterbg.addClass("counter-bg");
                        }
                        $(this).find(".counter").css("opacity", "0");
                    });
                }
            }

            function _callback() {
                _renderCounter();
                me.$el.html(me.template({counter: me.options.id}));
            }

            me.options.status = options.status;
            me.options.direction = options.direction;

            if (!me.options.status) {
                this.transitionIn(function () {
                    _callback();
                }, callback);
            } else {
                this.transitionOut(function () {
                    _callback();
                   _renderCounter();
                }, callback);
            }


            return this;
        },

        transitionIn: function (writecallback, callback) {

            var top,
                me = this,
                topin,
                meoptions = me.options.self;

            this.$el.css("opacity", "0");

            if (writecallback) {
                writecallback.call(this);
            }

            topin = (me.options.direction === 0 ? ((-1)*(meoptions.topin)) : meoptions.topin);
            this.$el.css("top", topin );
            this.$el.css("opacity", "1");

            top = meoptions.top;
            this.$el.animate({
                top: top

            }, meoptions.delay, function () {
                // Animation complete.
                if (callback) {
                    callback.call(me);
                }
            });
        },

        transitionOut: function (writecallback, callback) {

            var top,
                me = this,
                meoptions = me.options.self;


            if (writecallback) {
                writecallback.call(this);
            }

            top = (me.options.direction === 1 ? ((-1)*(meoptions.topout)) : meoptions.topout);


            this.$el.animate({
                top: top

            }, meoptions.delay, function () {

                // Animation complete.
                if (callback) {
                    callback.call(me);
                }
            });

        }

    });

    return BaseView;
});
