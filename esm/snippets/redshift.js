var redshift$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/redshift"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(redshift$1));

var redshift = redshift$1.exports;

export { redshift as default };
