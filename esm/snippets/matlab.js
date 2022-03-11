var matlab$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/matlab"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(matlab$1));

var matlab = matlab$1.exports;

export { matlab as default };
