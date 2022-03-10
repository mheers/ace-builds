var extError_marker$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/ext/error_marker"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(extError_marker$1));

var extError_marker = extError_marker$1.exports;

export { extError_marker as default };
