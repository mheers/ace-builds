var forth$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/forth"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(forth$1));

var forth = forth$1.exports;

export { forth as default };
