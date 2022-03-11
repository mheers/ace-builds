var cirru$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/cirru"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(cirru$1));

var cirru = cirru$1.exports;

export { cirru as default };
