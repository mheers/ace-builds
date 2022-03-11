var ada$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/ada"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(ada$1));

var ada = ada$1.exports;

export { ada as default };
