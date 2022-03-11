var prolog$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/prolog"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(prolog$1));

var prolog = prolog$1.exports;

export { prolog as default };
