var mushcode$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/mushcode"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(mushcode$1));

var mushcode = mushcode$1.exports;

export { mushcode as default };
