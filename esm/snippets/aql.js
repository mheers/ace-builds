var aql$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/aql"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(aql$1));

var aql = aql$1.exports;

export { aql as default };
