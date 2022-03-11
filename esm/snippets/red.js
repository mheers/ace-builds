var red$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/red"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(red$1));

var red = red$1.exports;

export { red as default };
