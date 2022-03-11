var dockerfile$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/dockerfile"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(dockerfile$1));

var dockerfile = dockerfile$1.exports;

export { dockerfile as default };
