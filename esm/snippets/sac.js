var sac$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/sac"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(sac$1));

var sac = sac$1.exports;

export { sac as default };
