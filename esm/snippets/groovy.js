var groovy$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/groovy"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(groovy$1));

var groovy = groovy$1.exports;

export { groovy as default };
