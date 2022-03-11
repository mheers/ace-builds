var fortran$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/fortran"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(fortran$1));

var fortran = fortran$1.exports;

export { fortran as default };
