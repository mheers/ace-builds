var apex$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/apex"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(apex$1));

var apex = apex$1.exports;

export { apex as default };
