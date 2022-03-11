var logtalk$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/logtalk"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(logtalk$1));

var logtalk = logtalk$1.exports;

export { logtalk as default };
