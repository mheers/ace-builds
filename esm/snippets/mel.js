var mel$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/mel"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(mel$1));

var mel = mel$1.exports;

export { mel as default };
