var visualforce$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/visualforce"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(visualforce$1));

var visualforce = visualforce$1.exports;

export { visualforce as default };
