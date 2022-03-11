var lucene$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/lucene"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(lucene$1));

var lucene = lucene$1.exports;

export { lucene as default };
