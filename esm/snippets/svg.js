var svg$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/svg"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(svg$1));

var svg = svg$1.exports;

export { svg as default };
