var gcode$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/gcode"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(gcode$1));

var gcode = gcode$1.exports;

export { gcode as default };
