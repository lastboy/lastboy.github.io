/*global define*/
'use strict';

/**
 * Global application management, including navigation and menu handling
 */

define(['app'], function (app) {

    var _module = function () {

        var _topMenu,
            _menuOptions,
            _scrollItems,
            _menuItems,
            _menuHandle,
            _lastId,
            _isTopMenu = function () {
                if (!_topMenu || (_topMenu && !_topMenu[0])) {
                    return false;
                }

                return (_scrollItems && _scrollItems.length > 0 ? true : false);
            };


        return {

            init: function ($scope, scrolldirective, appData) {

                // Cache selectors
                var topMenuHeight,
                    selectedData;

                /**
                 * Set the opacity style to the top menu
                 * 
                 * @param styleclass
                 * @private
                 */
                function _setMenuOpacity(styleclass) {
                    if (_topMenu && styleclass) {
                        _topMenu.removeClass();
                        _topMenu.addClass(styleclass);   
                    }
                }

                /**
                 * Initialization phase
                 * 
                 * @private
                 */
                function _init() {

                    // Top menu initial settings
                    _topMenu = $("#menu");
                    if (_topMenu[0]) {

                        _menuOptions = $("#menu-options");

                        _menuOptions.on("click", function() {
                            _setMenuOpacity("opacity-on");
                        });                                              
                        
                        _menuOptions.on("mouseover", function() {
                            _setMenuOpacity("opacity-on");
                        });

                        _topMenu.on("mouseover", function() {
                            _setMenuOpacity("opacity-on");
                        });

                        _menuOptions.on("mouseout", function() {
                            _menuController();
                        });                        topMenuHeight = _topMenu.outerHeight() + 15;

                        // All list items
                        _menuItems = _topMenu.find("a");

                        // Anchors corresponding to menu items
                        _scrollItems = _menuItems.map(function () {

                            var item = $("#" + $(this).attr("scroll-to"));
                            if (item.length) {
                                return item;
                            }

                        });
                    }
                }

                /**
                 * Section element update according to the scroll position
                 * 
                 * @param id
                 * @private
                 */
                function _updateSection(id) {

                    var sectionData;

                    if (_lastId !== id) {
                        _lastId = id;

                        // Set/remove active class                            
                        _menuItems
                            .parent().removeClass("active")
                            .end().filter("[scroll-to=" + id + "]").parent().addClass("active");
                        _menuItems
                            .removeClass("active")
                            .filter("[scroll-to=" + id + "]").addClass("active");

                        sectionData = appData.get(id);
                        if (sectionData) {

                            $scope.selectedSection.data = sectionData;
                            $scope.selectedSection.name = sectionData['display-name'];
                            $scope.$apply();
                        }
                    }
                }

                /**
                 * Top menu controller 
                 * 
                 * @private
                 */
                function _menuController() {
                    if (_menuOptions.css("display") !== "none") {
                        if (_menuHandle) {
                            _menuHandle = clearTimeout(_menuHandle);
                            _setMenuOpacity("opacity-on");
                        }
                        _menuHandle = setTimeout(function() {
                            _setMenuOpacity("opacity-full");
                        }, 1500);
                    } else {
                        _menuHandle = clearTimeout(_menuHandle);
                        _setMenuOpacity("opacity-off");
                    }
                }

                // Initialize in case the top menu not rendered just yet 
                if (!_isTopMenu()) {
                    _init();
                }

                // if the top menu is rendered go ahead and bind the scroll
                if (_isTopMenu()) {

                    selectedData = (appData ? appData.getSelected() : undefined);
                    if (scrolldirective && selectedData) {
                        scrolldirective.scrollTo.call(this, {scrollTo: selectedData.name});
                    }

                    // on window resize
                    $(window).resize(function () {
                        _menuController();
                    });
                        
                    // on window scroll
                    $(window).scroll(function () {

                        // Get container scroll position
                        var id, cur,
                            fromTop = $(this).scrollTop() + topMenuHeight;
                       
                        // Get id of current scroll item
                        cur = _scrollItems.map(function () {
                            if ($(this).offset().top < fromTop)
                                return this;
                        });

                        // Get the id of the current element
                        cur = cur[cur.length - 1];
                        id = cur && cur.length ? cur[0].id : "";

                        _updateSection(id);

                        _menuController();
                    });
                }

                return true;
            }
        }

    }();

    return _module;

});
