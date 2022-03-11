var lisp$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/lisp"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(lisp$1));

var lisp = lisp$1.exports;

export { lisp as default };
