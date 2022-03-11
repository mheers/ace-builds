var eiffel$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/eiffel"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(eiffel$1));

var eiffel = eiffel$1.exports;

export { eiffel as default };
