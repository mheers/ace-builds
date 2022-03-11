var mediawiki$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/mediawiki"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(mediawiki$1));

var mediawiki = mediawiki$1.exports;

export { mediawiki as default };
