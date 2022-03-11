var asl$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/asl"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(asl$1));

var asl = asl$1.exports;

export { asl as default };
