var scheme$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/scheme"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(scheme$1));

var scheme = scheme$1.exports;

export { scheme as default };
