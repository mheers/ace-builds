var batchfile$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/batchfile"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(batchfile$1));

var batchfile = batchfile$1.exports;

export { batchfile as default };
