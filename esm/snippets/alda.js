var alda$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/alda"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(alda$1));

var alda = alda$1.exports;

export { alda as default };
