var asciidoc$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/asciidoc"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(asciidoc$1));

var asciidoc = asciidoc$1.exports;

export { asciidoc as default };
