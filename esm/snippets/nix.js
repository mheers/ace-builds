var nix$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/nix"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(nix$1));

var nix = nix$1.exports;

export { nix as default };
