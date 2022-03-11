var haxe$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/haxe"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(haxe$1));

var haxe = haxe$1.exports;

export { haxe as default };
