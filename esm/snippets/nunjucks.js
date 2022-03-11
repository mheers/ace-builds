var nunjucks$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/nunjucks"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(nunjucks$1));

var nunjucks = nunjucks$1.exports;

export { nunjucks as default };
