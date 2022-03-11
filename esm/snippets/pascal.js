var pascal$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/pascal"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(pascal$1));

var pascal = pascal$1.exports;

export { pascal as default };
