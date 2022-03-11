var json5$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/json5"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(json5$1));

var json5 = json5$1.exports;

export { json5 as default };
