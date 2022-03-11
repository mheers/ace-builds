var handlebars$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/handlebars"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(handlebars$1));

var handlebars = handlebars$1.exports;

export { handlebars as default };
