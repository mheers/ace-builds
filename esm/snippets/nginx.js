var nginx$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/nginx"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(nginx$1));

var nginx = nginx$1.exports;

export { nginx as default };
