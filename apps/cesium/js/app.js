var app = function() {

    var logcounter = 0;

    function _logger() {

        function print() {
            var err = document.querySelector("#errormsg"),
                args, i, iserror = false;

            function _rowdisplay(msg, ismultirow, iserror) {

                if (iserror) {
                    msg = "<span style=\"color:red\">" + msg + "</span>"
                }

                msg = msg.split("\n").join("<br/>");
                err.innerHTML += (ismultirow ? " " : logcounter+". " ) + msg + (ismultirow ? "" :  " <br />");
                if (!ismultirow) {
                    logcounter++;
                }
            }

            args =[];
            for(i = 0; i < arguments.length; ++i) {
                args[i] = arguments[i];
            }

            if (err) {
                args.forEach(function(msg) {
                    var msgvar;

                    if (msg.length) {

                        args =[];

                        if (msg.length === 1 && msg[0].indexOf("Error:") === 0) {
                            iserror = true;
                        }

                        err.innerHTML += logcounter + ". ";
                        logcounter++;
                        for(i = 0; i < msg.length; ++i) {
                            msgvar = msg[i];
                            _rowdisplay(msgvar, true, iserror);

                        }
                        err.innerHTML += " <br />";
                    } else {

                        if (msg.indexOf("Error:") === 0) {
                            iserror = true;
                        }
                        _rowdisplay(msg, true, iserror);

                    }

                });

            }
        }

        print.call(this, arguments);
    }

    function _onerror(msg, url, line, col, error) {

        var extra = !col ? '' : '\ncolumn: ' + col,
            suppressErrorAlert = true;

        extra += !error ? '' : '\nerror: ' + error;

        console.error("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
        _logger("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

        // If you return true, then error alerts (like in older versions of
        // Internet Explorer) will be suppressed.
        return suppressErrorAlert;
    }

    return {

        init: function(msg) {

            var body = document.querySelector("body");
            if (body) {
                body.innerHTML += "<div  style=\"position: fixed; bottom:0; padding: 10px; overflow: auto; width: 100%; height: 100px;\">" +
                    "<div style=\"width: 100%; height: 30px; color: white; font-weight: bold\"> Console Log </div>" +
                    "<div id=\"errormsg\" style=\"width: 100%; height: 30px;\"> </div>" +
                "</div>";
            }

            window.onerror = function() {
                return _onerror.apply(this, arguments);
            };

            if (msg) {
                _logger("[app init] ", msg);
            }

        },

        log: _logger,

        utils: {

            /*
             * Get the camera height utility
             */
            cameraHeightUtil: function() {
                var cameraHeight = viewer.scene.globe.ellipsoid.cartesianToCartographic(viewer.camera.position).height || Number.MAX_VALUE;
                return cameraHeight / viewer.camera.defaultZoomAmount;
            },

            /**
             * Fly to a specific point
             *
             * @param coords (longitude, latitude)
             * @param zoomFactor (e.g. 10)
             */
            fly: function (coords, zoomFactor) {
                viewer.camera.flyTo({
                    destination : Cesium.Cartesian3.fromDegrees(coords.longitude, coords.latitude, viewer.camera.defaultZoomAmount*(zoomFactor||1))
                });
            }
        }
    }

}();


