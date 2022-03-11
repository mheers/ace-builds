var smithy$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/smithy"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(smithy$1));

var smithy = smithy$1.exports;

export { smithy as default };
