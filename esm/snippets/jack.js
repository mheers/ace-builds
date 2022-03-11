var jack$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/jack"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(jack$1));

var jack = jack$1.exports;

export { jack as default };
