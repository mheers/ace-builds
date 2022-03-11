var autohotkey$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/autohotkey"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(autohotkey$1));

var autohotkey = autohotkey$1.exports;

export { autohotkey as default };
