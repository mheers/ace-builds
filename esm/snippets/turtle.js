var turtle$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/turtle"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(turtle$1));

var turtle = turtle$1.exports;

export { turtle as default };
