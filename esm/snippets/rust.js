var rust$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/rust"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(rust$1));

var rust = rust$1.exports;

export { rust as default };
