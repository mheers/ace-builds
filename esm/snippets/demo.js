var demo$1 = {exports: {}};

(function (module, exports) {
ace.define("ace/snippets/demo",["require","exports","module"],function(e,t,n){t.snippetText="# demo\nsnippet #demo\n	#demo ( ${1:macroName} ${2:\\$var1, [\\$var2, ...]} )\n		${3:## demo code}\n	#end\n",t.scope="demo";});                (function() {
                    ace.require(["ace/snippets/demo"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
}(demo$1));

var demo = demo$1.exports;

export { demo as default };
