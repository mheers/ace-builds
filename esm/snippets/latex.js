var latex$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/latex"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(latex$1));

var latex = latex$1.exports;

export { latex as default };
