var json$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/json"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(json$1));

var json = json$1.exports;

export { json as default };
