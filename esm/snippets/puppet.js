var puppet$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/puppet"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(puppet$1));

var puppet = puppet$1.exports;

export { puppet as default };
