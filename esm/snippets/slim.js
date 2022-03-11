var slim$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/slim"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(slim$1));

var slim = slim$1.exports;

export { slim as default };
