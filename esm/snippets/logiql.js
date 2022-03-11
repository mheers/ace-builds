var logiql$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/logiql"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(logiql$1));

var logiql = logiql$1.exports;

export { logiql as default };
