var hjson$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/hjson"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(hjson$1));

var hjson = hjson$1.exports;

export { hjson as default };
