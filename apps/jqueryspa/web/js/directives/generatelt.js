/*global define*/
'use strict';
/**
 * Directive for generating an element according to its metadata (e.g. js/pages/app.html)
 *
 * type: The tag type
 * template-url: The template url to be included
 *
 */
define(['app'], function (app) {


    app.directive('generatelt', ["$compile", function ($compile) {

        var properties = {
            "type": {"attr": "tag"},
            "templateurl": {"attr": "ng-include"}
        };

        return {
            restrict: 'E',
            link: function (scope, element, attrs) {

                var attrnames = attrs.$attr,
                    tagName = "div",
                    template = [],
                    out, key, item, prop;

                if (attrnames) {
                    for (key in attrnames) {
                        item = attrnames[key];
                        if (item) {
                            if (item.indexOf("ng-") === 0) {
                                continue;
                            }
                            if (item in properties) {
                                prop = properties[item];

                                if ((item in scope) || (prop in scope)) {
                                    continue;
                                }

                                if (item === "type" && prop.attr === "tag") {
                                    tagName = attrs[item];

                                } else {
                                    if (prop.attr === "ng-include") {
                                        scope["ngIncludeTmp"] = attrs[item];
                                        template.push([" ", prop.attr, '="', "ngIncludeTmp", '"'].join(""));
                                    } else {
                                        scope[prop.attr] = attrs[item];
                                        template.push([" ", prop.attr, '="', attrs[item], '"'].join(""));
                                    }
                                }

                            } else {
                                scope[item] = attrs[item];
                                template.push([" ", item, '="', attrs[item], '"'].join(""));
                            }

                        }
                    }
                }

                if (!attrnames || !("id" in attrnames)) {
                    console.warn("[jqueryspa] 'id' attribute is required");
                }

                template = ["<", tagName, " ", template.join(""), " >", "</", tagName, ">"].join("");
                out = ($compile(template))(scope);
                element.replaceWith(out);

              
            }
        }

    }]);

});