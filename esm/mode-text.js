var modeText$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/mode/text"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(modeText$1));

var modeText = modeText$1.exports;

export { modeText as default };
