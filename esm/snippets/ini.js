var ini$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/ini"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(ini$1));

var ini = ini$1.exports;

export { ini as default };
