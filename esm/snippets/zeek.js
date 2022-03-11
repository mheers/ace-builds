var zeek$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/zeek"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(zeek$1));

var zeek = zeek$1.exports;

export { zeek as default };
