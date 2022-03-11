var xml$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/xml"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(xml$1));

var xml = xml$1.exports;

export { xml as default };
