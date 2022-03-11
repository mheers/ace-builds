var less$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/less"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(less$1));

var less = less$1.exports;

export { less as default };
