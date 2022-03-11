var yaml$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/yaml"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(yaml$1));

var yaml = yaml$1.exports;

export { yaml as default };
