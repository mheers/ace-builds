var sjs$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/sjs"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(sjs$1));

var sjs = sjs$1.exports;

export { sjs as default };
