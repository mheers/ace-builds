var mixal$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/mixal"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(mixal$1));

var mixal = mixal$1.exports;

export { mixal as default };
