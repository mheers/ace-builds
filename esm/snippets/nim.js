var nim$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/nim"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(nim$1));

var nim = nim$1.exports;

export { nim as default };
