var makefile$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/makefile",["require","exports","module"],function(e,t,n){t.snippetText="snippet ifeq\n	ifeq (${1:cond0},${2:cond1})\n		${3:code}\n	endif\n",t.scope="makefile";});                (function() {
                    ace.require(["ace/snippets/makefile"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(makefile$1));

var makefile = makefile$1.exports;

export { makefile as default };
