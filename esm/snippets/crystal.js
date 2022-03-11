var crystal$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/crystal"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(crystal$1));

var crystal = crystal$1.exports;

export { crystal as default };
