var julia$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/julia"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(julia$1));

var julia = julia$1.exports;

export { julia as default };
