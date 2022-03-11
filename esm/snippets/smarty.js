var smarty$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/smarty"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(smarty$1));

var smarty = smarty$1.exports;

export { smarty as default };
