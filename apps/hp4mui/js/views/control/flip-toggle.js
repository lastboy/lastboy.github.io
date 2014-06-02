define([
    'jquery'

], function ($) {

    'use strict';

    var _module;

    _module = function () {

        return {

            init: function(config) {
                var elt = config.elt,
                    toggle,
                    me = this;

                if (elt) {
                    toggle = elt.find(".flip-toggle");
                    if (toggle) {
                        toggle.prop("state", "1");
                        toggle.on("click", function(e) {
                            me.toggle(e.currentTarget);
                        });
                    }
                }

            },

            toggle: function(elt) {
                var toggle = $(elt);

                function _switch(state) {
                    if (state === "1") {
                        toggle.find(".switch-circle").removeClass("switch-off");
                        toggle.find(".right-circle").removeClass("circle-off");
                        toggle.find(".left-circle").removeClass("circle-off");
                        toggle.find(".text").removeClass("text-off");
                        toggle.find(".text").html("On");

                    } else {
                        toggle.find(".switch-circle").addClass("switch-off");
                        toggle.find(".right-circle").addClass("circle-off");
                        toggle.find(".left-circle").addClass("circle-off");
                        toggle.find(".text").addClass("text-off");
                        toggle.find(".text").html("Off");

                    }
                }

                if (elt) {
                    if (toggle) {
                        if (toggle.prop("state") === "1") {
                            toggle.prop("state", "0");
                            _switch("0");
                        } else {
                            toggle.prop("state", "1");
                            _switch("1");
                        }
                    }
                }
            }

        }
    };

    return _module;
});

