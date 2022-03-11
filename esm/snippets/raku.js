var raku$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/raku"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(raku$1));

var raku = raku$1.exports;

export { raku as default };
