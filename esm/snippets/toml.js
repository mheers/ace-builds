var toml$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/toml"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(toml$1));

var toml = toml$1.exports;

export { toml as default };
