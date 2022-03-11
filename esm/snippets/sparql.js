var sparql$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/sparql"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(sparql$1));

var sparql = sparql$1.exports;

export { sparql as default };
