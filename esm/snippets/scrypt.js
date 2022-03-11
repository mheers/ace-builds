var scrypt$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/scrypt"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(scrypt$1));

var scrypt = scrypt$1.exports;

export { scrypt as default };
