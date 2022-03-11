var pgsql$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/pgsql"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(pgsql$1));

var pgsql = pgsql$1.exports;

export { pgsql as default };
