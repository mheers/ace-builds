var gherkin$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/gherkin"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(gherkin$1));

var gherkin = gherkin$1.exports;

export { gherkin as default };
