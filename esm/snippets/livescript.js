var livescript$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/livescript"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(livescript$1));

var livescript = livescript$1.exports;

export { livescript as default };
