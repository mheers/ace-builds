var luapage$1 = {exports: {}};

(function (module, exports) {
                (function() {
                    ace.require(["ace/snippets/luapage"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(luapage$1));

var luapage = luapage$1.exports;

export { luapage as default };
