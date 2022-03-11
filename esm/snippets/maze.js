var maze$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/maze",["require","exports","module"],function(e,t,n){t.snippetText="snippet >\ndescription assignment\nscope maze\n	-> ${1}= ${2}\n\nsnippet >\ndescription if\nscope maze\n	-> IF ${2:**} THEN %${3:L} ELSE %${4:R}\n",t.scope="maze";});                (function() {
                    ace.require(["ace/snippets/maze"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(maze$1));

var maze = maze$1.exports;

export { maze as default };
