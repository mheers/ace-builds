var csp$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/csp"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(csp$1));

var csp = csp$1.exports;

export { csp as default };
