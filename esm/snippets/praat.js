var praat$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/praat"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(praat$1));

var praat = praat$1.exports;

export { praat as default };
