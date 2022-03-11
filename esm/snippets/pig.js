var pig$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/pig"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(pig$1));

var pig = pig$1.exports;

export { pig as default };
