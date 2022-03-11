var latte$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/latte"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(latte$1));

var latte = latte$1.exports;

export { latte as default };
