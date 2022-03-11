var gitignore$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/gitignore"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(gitignore$1));

var gitignore = gitignore$1.exports;

export { gitignore as default };
