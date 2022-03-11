var nsis$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/nsis"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(nsis$1));

var nsis = nsis$1.exports;

export { nsis as default };
