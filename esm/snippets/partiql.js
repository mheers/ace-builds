var partiql$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/partiql"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(partiql$1));

var partiql = partiql$1.exports;

export { partiql as default };
