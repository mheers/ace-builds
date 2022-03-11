var mysql$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/mysql"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(mysql$1));

var mysql = mysql$1.exports;

export { mysql as default };
