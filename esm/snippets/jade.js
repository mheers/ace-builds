var jade$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/jade"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(jade$1));

var jade = jade$1.exports;

export { jade as default };
