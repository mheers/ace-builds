var jssm$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/jssm"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(jssm$1));

var jssm = jssm$1.exports;

export { jssm as default };
