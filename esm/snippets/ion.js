var ion$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/ion"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(ion$1));

var ion = ion$1.exports;

export { ion as default };
