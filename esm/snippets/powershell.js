var powershell$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/powershell"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(powershell$1));

var powershell = powershell$1.exports;

export { powershell as default };
